'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Copy, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address, e.g. you@example.com'),
  subject: z.string().min(3, 'Please add a short subject'),
  message: z.string().min(10, 'Please write at least a sentence so we can help properly'),
});

type FormValues = z.infer<typeof schema>;

function composeBody(v: FormValues): string {
  return `${v.message}\n\n— ${v.name} (${v.email})`;
}

/**
 * There is no server-side mail handler, so this form composes a message in the
 * visitor's own email client.
 *
 * That mechanism can fail silently — a device with no mail app configured simply
 * does nothing when handed a mailto: URL. The previous version showed a success
 * message regardless, so a genuine enquiry could vanish with the sender believing
 * it had been sent. We now open the draft and then always show the full message
 * with a copy button, so there is a working path either way.
 */
export function ContactForm() {
  const [sent, setSent] = useState<FormValues | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: 'onBlur' });

  const onSubmit = (values: FormValues) => {
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(composeBody(values));
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setSent(values);
  };

  const copyAll = async () => {
    if (!sent) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${siteConfig.contactEmail}\nSubject: ${sent.subject}\n\n${composeBody(sent)}`,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the text below is selectable as a fallback.
    }
  };

  if (sent) {
    return (
      <div className="glass-card space-y-4 p-6 sm:p-8">
        <div className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
          Your email app should have opened with this message ready to go.{' '}
          <strong>It is not sent until you press send there.</strong>
        </div>

        <p className="text-sm text-muted-foreground">
          Nothing opened? Some browsers and devices have no mail app configured. Copy the message
          below and send it from whichever email you use — it reaches the same inbox.
        </p>

        <div className="rounded-xl border border-border bg-background p-4 text-sm">
          <p>
            <span className="text-muted-foreground">To: </span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="mt-1">
            <span className="text-muted-foreground">Subject: </span>
            <span className="font-medium">{sent.subject}</span>
          </p>
          <p className="mt-3 whitespace-pre-wrap text-muted-foreground">{composeBody(sent)}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button onClick={copyAll} className="btn-secondary flex-1 text-sm">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied to clipboard' : 'Copy message'}
          </button>
          <button onClick={() => setSent(null)} className="btn-secondary flex-1 text-sm">
            Write another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-4 p-6 sm:p-8" noValidate>
      <p className="text-sm text-muted-foreground">
        This form opens a draft in your own email app — we do not store what you type here. You can
        also write to us directly at{' '}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-primary hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Name</span>
          <input
            className="field-input"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
            placeholder="Your name"
          />
          {errors.name ? (
            <span role="alert" className="mt-1 block text-xs text-destructive">
              {errors.name.message}
            </span>
          ) : null}
        </label>
        <label className="block">
          <span className="field-label">Email</span>
          <input
            className="field-input"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <span role="alert" className="mt-1 block text-xs text-destructive">
              {errors.email.message}
            </span>
          ) : null}
        </label>
      </div>

      <label className="block">
        <span className="field-label">Subject</span>
        <input
          className="field-input"
          aria-invalid={Boolean(errors.subject)}
          {...register('subject')}
          placeholder="Bug report, feature request, or a question"
        />
        {errors.subject ? (
          <span role="alert" className="mt-1 block text-xs text-destructive">
            {errors.subject.message}
          </span>
        ) : null}
      </label>

      <label className="block">
        <span className="field-label">Message</span>
        <textarea
          className="field-input min-h-[140px]"
          aria-invalid={Boolean(errors.message)}
          {...register('message')}
          placeholder="If you're reporting a problem, tell us which tool you were using and what you expected to happen."
        />
        {errors.message ? (
          <span role="alert" className="mt-1 block text-xs text-destructive">
            {errors.message.message}
          </span>
        ) : null}
      </label>

      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" /> Compose email
      </button>
    </form>
  );
}
