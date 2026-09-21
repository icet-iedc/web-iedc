'use client';

import { useState, useId, useImperativeHandle, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { CommunityRequestType, SubmitStatus, FormPayload } from './types';
import { submitCommunityForm } from './submitForm';
import CustomSelect from './CustomSelect';

export interface CommunityFormHandle {
  submit: () => void;
  isSubmitting: boolean;
}

interface CommunityFormProps {
  requestType: CommunityRequestType;
  onClose: () => void;
  onStatusChange?: (status: SubmitStatus) => void;
}


export const FORM_CONFIG: Record<
  CommunityRequestType,
  { title: string; description: string; submitLabel: string }
> = {
  join: {
    title: 'Join the IEDC Community',
    description:
      'Become part of our innovation and entrepreneurship community at ICET.',
    submitLabel: 'Join Community →',
  },
  idea: {
    title: 'Have an idea?',
    description:
      "Tell us about your idea and let's explore how IEDC can help.",
    submitLabel: 'Submit Idea →',
  },
  collaboration: {
    title: 'Want to collaborate?',
    description:
      "Let's explore opportunities to build and create something together.",
    submitLabel: 'Send Collaboration Request →',
  },
  question: {
    title: 'Have a question?',
    description:
      'Have a question about IEDC, our programs, events, or activities? Ask us.',
    submitLabel: 'Send Question →',
  },
};

const DEPARTMENTS = [
  'Computer Science & Engineering',
  'Electronics & Communication Engineering',
  'Electrical & Electronics Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Other',
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

const COLLABORATION_TYPES = [
  'Joint Event / Workshop',
  'Research Collaboration',
  'Mentorship / Advisory',
  'Sponsorship / Funding',
  'Technology Partnership',
  'Other',
];


const INPUT_CLS =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] ' +
  'placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-white/8 ' +
  'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

const LABEL_CLS = 'block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-1.5';


function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={LABEL_CLS}>
        {label}
      </label>
      {children}
    </div>
  );
}


const CommunityForm = forwardRef<CommunityFormHandle, CommunityFormProps>(
  function CommunityForm({ requestType, onClose, onStatusChange }, ref) {
    const uid = useId();
    const config = FORM_CONFIG[requestType];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');

    const [ideaTitle, setIdeaTitle] = useState('');

    const [organization, setOrganization] = useState('');
    const [collaborationType, setCollaborationType] = useState('');

    const [subject, setSubject] = useState('');

    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const isSubmitting = status === 'submitting';


    function buildPayload(): FormPayload {
      const base = { name, email, phone: phone || undefined, message };
      if (requestType === 'join') {
        return { ...base, requestType: 'join', department, year };
      }
      if (requestType === 'idea') {
        return { ...base, requestType: 'idea', ideaTitle };
      }
      if (requestType === 'collaboration') {
        return { ...base, requestType: 'collaboration', organization, collaborationType };
      }
      return { ...base, requestType: 'question', subject };
    }


    async function doSubmit() {
      if (isSubmitting) return;
      const newStatus: SubmitStatus = 'submitting';
      setStatus(newStatus);
      onStatusChange?.(newStatus);
      setErrorMessage('');

      const result = await submitCommunityForm(buildPayload());

      if (result.ok) {
        setStatus('success');
        onStatusChange?.('success');
      } else {
        setStatus('error');
        onStatusChange?.('error');
        setErrorMessage(result.message ?? 'Something went wrong. Please try again.');
      }
    }

    useImperativeHandle(ref, () => ({
      submit: doSubmit,
      isSubmitting,
    }));


    if (status === 'success') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col items-center text-center py-8 gap-5"
        >
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xl font-bold text-white mb-2">Message sent successfully.</p>
            <p className="text-[14px] text-white/55 leading-relaxed max-w-xs mx-auto">
              Thank you for reaching out to IEDC ICET. We&apos;ll get back to you soon.
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-2 px-8 py-3 rounded-full bg-[#D4AF37] text-[#111111] text-[14px] font-semibold
              hover:bg-[#FFD700] transition-colors duration-200"
          >
            Close
          </button>
        </motion.div>
      );
    }


    return (
      <motion.div
        key="form"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        {/* Error banner */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-5"
            >
              <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="text-[13px] text-red-300 leading-relaxed">{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fields — no submit button here, it lives in the fixed modal footer */}
        <div className="flex flex-col gap-4">

          {/* ── Shared: Name ── */}
          <Field
            label={requestType === 'collaboration' ? 'Full Name / Organization Name' : 'Full Name'}
            htmlFor={`${uid}-name`}
          >
            <input
              id={`${uid}-name`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={requestType === 'collaboration' ? 'Your name or organization' : 'Your full name'}
              required
              disabled={isSubmitting}
              className={INPUT_CLS}
            />
          </Field>

          {/* ── Shared: Email ── */}
          <Field
            label={requestType === 'join' ? 'College Email' : 'Email'}
            htmlFor={`${uid}-email`}
          >
            <input
              id={`${uid}-email`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={requestType === 'join' ? 'name@college.edu' : 'your@email.com'}
              required
              disabled={isSubmitting}
              className={INPUT_CLS}
            />
          </Field>

          {/* ── Phone ── */}
          {requestType !== 'question' && (
            <Field
              label={requestType === 'join' ? 'Phone Number' : 'Phone Number (optional)'}
              htmlFor={`${uid}-phone`}
            >
              <input
                id={`${uid}-phone`}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 00000 00000"
                required={requestType === 'join'}
                disabled={isSubmitting}
                className={INPUT_CLS}
              />
            </Field>
          )}

          {/* ── Join: Department + Year ── */}
          {requestType === 'join' && (
            <div className="grid grid-cols-1 gap-4">
              <Field label="Department" htmlFor={`${uid}-dept`}>
                <CustomSelect
                  id={`${uid}-dept`}
                  value={department}
                  onChange={setDepartment}
                  options={DEPARTMENTS}
                  placeholder="Select department"
                  disabled={isSubmitting}
                />
              </Field>

              <Field label="Year of Study" htmlFor={`${uid}-year`}>
                <CustomSelect
                  id={`${uid}-year`}
                  value={year}
                  onChange={setYear}
                  options={YEARS}
                  placeholder="Select year"
                  disabled={isSubmitting}
                />
              </Field>
            </div>
          )}

          {/* ── Idea: Idea Title ── */}
          {requestType === 'idea' && (
            <Field label="Idea / Project Title" htmlFor={`${uid}-idea-title`}>
              <input
                id={`${uid}-idea-title`}
                type="text"
                value={ideaTitle}
                onChange={(e) => setIdeaTitle(e.target.value)}
                placeholder="Give your idea a name"
                required
                disabled={isSubmitting}
                className={INPUT_CLS}
              />
            </Field>
          )}

          {/* ── Collaboration: Organization + Type ── */}
          {requestType === 'collaboration' && (
            <>
              <Field label="Organization" htmlFor={`${uid}-org`}>
                <input
                  id={`${uid}-org`}
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Your organization or company"
                  required
                  disabled={isSubmitting}
                  className={INPUT_CLS}
                />
              </Field>

              <Field label="Collaboration Type" htmlFor={`${uid}-collab-type`}>
                <CustomSelect
                  id={`${uid}-collab-type`}
                  value={collaborationType}
                  onChange={setCollaborationType}
                  options={COLLABORATION_TYPES}
                  placeholder="Select type"
                  disabled={isSubmitting}
                />
              </Field>
            </>
          )}

          {/* ── Question: Subject ── */}
          {requestType === 'question' && (
            <Field label="Subject" htmlFor={`${uid}-subject`}>
              <input
                id={`${uid}-subject`}
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's your question about?"
                required
                disabled={isSubmitting}
                className={INPUT_CLS}
              />
            </Field>
          )}

          {/* ── Shared: Message ── */}
          <Field
            label={
              requestType === 'idea'
                ? 'Tell us about your idea'
                : requestType === 'join'
                  ? 'Why do you want to join?'
                  : 'Message'
            }
            htmlFor={`${uid}-message`}
          >
            <textarea
              id={`${uid}-message`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                requestType === 'join'
                  ? 'Share your motivation...'
                  : requestType === 'idea'
                    ? 'Describe your idea, the problem it solves, and your vision...'
                    : requestType === 'collaboration'
                      ? 'Tell us what you have in mind...'
                      : 'Type your question here...'
              }
              required
              rows={4}
              disabled={isSubmitting}
              className={`${INPUT_CLS} resize-none`}
            />
          </Field>
        </div>
        {/* Submit button intentionally omitted — rendered in the fixed modal footer */}
      </motion.div>
    );
  }
);

export default CommunityForm;
