'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Please add a subject'),
  message: z.string().min(10, 'Please write at least a sentence'),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    const subject = encodeURIComponent(values.subject);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-4 p-6 sm:p-8" noValidate>
      {isSubmitSuccessful ? (
        <p className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
          Thanks! Your email app should have opened. If not, write to us at {siteConfig.contactEmail}.
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Name</span>
          <input className="field-input" {...register('name')} placeholder="Your name" />
          {errors.name ? <span className="mt-1 block text-xs text-destructive">{errors.name.message}</span> : null}
        </label>
        <label className="block">
          <span className="field-label">Email</span>
          <input className="field-input" type="email" {...register('email')} placeholder="you@example.com" />
          {errors.email ? <span className="mt-1 block text-xs text-destructive">{errors.email.message}</span> : null}
        </label>
      </div>

      <label className="block">
        <span className="field-label">Subject</span>
        <input className="field-input" {...register('subject')} placeholder="How can we help?" />
        {errors.subject ? <span className="mt-1 block text-xs text-destructive">{errors.subject.message}</span> : null}
      </label>

      <label className="block">
        <span className="field-label">Message</span>
        <textarea className="field-input min-h-[140px]" {...register('message')} placeholder="Tell us more…" />
        {errors.message ? <span className="mt-1 block text-xs text-destructive">{errors.message.message}</span> : null}
      </label>

      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" /> Send Message
      </button>
    </form>
  );
}
