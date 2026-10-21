import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { SERVICES } from '@/lib/content';

const PROJECT_TYPES = [
  ...SERVICES.map((s) => s.title),
  'Request a quote',
  'Request a demo',
  'Not sure yet',
  'Something else',
];
const BUDGET_RANGES = ['Under ৳25,000', '৳25,000 – ৳50,000', '৳50,000 – ৳100,000', '৳100,000+', 'Not sure yet'];
const TIMELINES = ['As soon as possible', 'Next 1–3 months', '3–6 months', 'Just exploring'];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/40 transition-colors duration-300 focus:border-electric focus:outline-none';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="label-mono text-muted-foreground/50">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function SelectField({ value, onChange, options, placeholder }) {
  return (
    <div className="relative">
      <select value={value} onChange={onChange} className={`${inputClass} appearance-none pr-8`}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-background text-foreground">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-0 top-4 h-4 w-4 text-muted-foreground/60" />
    </div>
  );
}

export default function ProjectForm() {
  const [form, setForm] = useState(() => ({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    project_type: '',
    budget: '',
    timeline: '',
    features: '',
    message: '',
  }));
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please add your name, email, and a short description of the project.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      setError('That email address does not look right. Please check it.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const response = await base44.functions.invoke('submitProjectInquiry', form);
      if (response?.data?.ok) {
        setReference(response.data.reference ?? '');
        setStatus('sent');
      } else {
        setError(response?.data?.error || 'We could not send your brief. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setError('We could not send your brief. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric/60 text-electric">
          <Check className="h-4 w-4" />
        </span>
        <h2 className="mt-8 font-display text-2xl tracking-[-0.02em] text-foreground md:text-3xl">Brief received.</h2>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          We&apos;ll read it properly and come back to you with questions or a first read on scope.
        </p>
        {reference && <p className="mt-6 label-mono text-muted-foreground/50">Reference / {reference.slice(0, 8)}</p>}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10" noValidate>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Your name">
          <input type="text" value={form.full_name} onChange={set('full_name')} placeholder="Full name" className={inputClass} />
        </Field>
        <Field label="Email">
          <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" className={inputClass} />
        </Field>
        <Field label="WhatsApp or phone (optional)">
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+880 …" className={inputClass} />
        </Field>
        <Field label="Company or brand (optional)">
          <input type="text" value={form.company} onChange={set('company')} placeholder="Company or brand" className={inputClass} />
        </Field>
        <Field label="Type of project">
          <SelectField
            value={form.project_type}
            onChange={set('project_type')}
            options={PROJECT_TYPES}
            placeholder="Select a service"
          />
        </Field>
        <Field label="Budget range">
          <SelectField value={form.budget} onChange={set('budget')} options={BUDGET_RANGES} placeholder="Select a range" />
        </Field>
        <Field label="Desired timeline">
          <SelectField value={form.timeline} onChange={set('timeline')} options={TIMELINES} placeholder="Select a timeline" />
        </Field>
        <div className="hidden sm:block" />
        <div className="sm:col-span-2">
          <Field label="The project">
            <textarea
              value={form.message}
              onChange={set('message')}
              rows={6}
              placeholder="What are you building, who is it for, and what does it need to do?"
              className={`${inputClass} resize-none leading-relaxed`}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Required features (optional)">
            <input
              type="text"
              value={form.features}
              onChange={set('features')}
              placeholder="e.g. payments, booking, login, admin panel"
              className={inputClass}
            />
          </Field>
        </div>
      </div>

      {status === 'error' && error && <p className="mt-6 text-sm text-destructive">{error}</p>}

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-between gap-6 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending your brief' : 'Send project brief'}
          {status === 'sending' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground/60">Your brief is stored privately and read by our team.</p>
      </div>
    </form>
  );
}