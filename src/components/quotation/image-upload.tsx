'use client';

import { Upload, X } from 'lucide-react';
import { useRef } from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (dataUrl: string) => void;
  hint?: string;
}

export function ImageUpload({ label, value, onChange, hint }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    if (file.size > 3 * 1024 * 1024) {
      alert('Please choose an image under 3 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <span className="field-label">{label}</span>
      {value ? (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt={label} className="h-12 w-12 rounded-lg object-contain" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="ml-auto inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-destructive hover:bg-destructive/10"
          >
            <X className="h-3.5 w-3.5" /> Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/20 px-3 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Upload className="h-4 w-4" /> {hint ?? 'Upload image'}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
