import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { waitUntil } from 'base44:runtime';

const LIMITS = { name: 120, email: 180, phone: 40, company: 160, type: 80, budget: 60, timeline: 80, features: 1200, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/**
 * Receives a project brief from the public website form.
 * Stores it and notifies the studio's admins.
 */
export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const payload = {
      full_name: clean(body.full_name, LIMITS.name),
      email: clean(body.email, LIMITS.email).toLowerCase(),
      phone: clean(body.phone, LIMITS.phone),
      company: clean(body.company, LIMITS.company),
      project_type: clean(body.project_type, LIMITS.type),
      budget: clean(body.budget, LIMITS.budget),
      timeline: clean(body.timeline, LIMITS.timeline),
      features: clean(body.features, LIMITS.features),
      message: clean(body.message, LIMITS.message),
      status: 'new',
    };

    if (!payload.full_name || !payload.message || !EMAIL_RE.test(payload.email)) {
      return Response.json(
        { error: 'Please include your name, a valid email address, and a short brief.' },
        { status: 400 },
      );
    }

    const record = await base44.asServiceRole.entities.ProjectInquiry.create(payload);

    waitUntil(
      (async () => {
        try {
          const result = await base44.asServiceRole.entities.User.filter({ role: 'admin' });
          const admins = (Array.isArray(result) ? result : (result?.items ?? [])).slice(0, 5);
          const recipients = admins.map((a) => a.email).filter(Boolean);
          if (!recipients.length) return;

          const summary = [
            `Name: ${payload.full_name}`,
            `Email: ${payload.email}`,
            payload.company ? `Company: ${payload.company}` : null,
            payload.phone ? `Phone/WhatsApp: ${payload.phone}` : null,
            payload.project_type ? `Project type: ${payload.project_type}` : null,
            payload.budget ? `Budget: ${payload.budget}` : null,
            payload.timeline ? `Timeline: ${payload.timeline}` : null,
            payload.features ? `Required features: ${payload.features}` : null,
            '',
            payload.message,
          ]
            .filter(Boolean)
            .join('\n');

          await Promise.allSettled(
            recipients.map((to) =>
              base44.asServiceRole.integrations.Core.SendEmail({
                to,
                subject: `New project inquiry — ${payload.full_name}`,
                body: summary,
              }),
            ),
          );
        } catch (notifyError) {
          console.log('inquiry notification failed', notifyError?.message);
        }
      })(),
    );

    return Response.json({ ok: true, reference: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}