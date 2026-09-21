import type { FormPayload } from './types';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const SUBJECTS: Record<FormPayload['requestType'], string> = {
  join: 'IEDC Website - Join Community',
  idea: 'IEDC Website - New Idea',
  collaboration: 'IEDC Website - Collaboration Request',
  question: 'IEDC Website - Question',
};

const REQUEST_TYPE_LABELS: Record<FormPayload['requestType'], string> = {
  join: 'Join Community',
  idea: 'Idea',
  collaboration: 'Collaboration',
  question: 'Question',
};

export interface SubmitResult {
  ok: boolean;
  message?: string;
}

export async function submitCommunityForm(payload: FormPayload): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error('NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set.');
    return {
      ok: false,
      message: 'Configuration error. Please contact us directly.',
    };
  }

  const form = new FormData();
  form.append('access_key', accessKey);
  form.append('subject', SUBJECTS[payload.requestType]);
  form.append('from_name', 'IEDC ICET Website');
  form.append('request_type', REQUEST_TYPE_LABELS[payload.requestType]);
  form.append('name', payload.name);
  form.append('email', payload.email);

  if (payload.phone) {
    form.append('phone', payload.phone);
  }

  form.append('message', payload.message);

  // Type-specific fields
  if (payload.requestType === 'join') {
    form.append('department', payload.department);
    form.append('year', payload.year);
  } else if (payload.requestType === 'idea') {
    form.append('idea_title', payload.ideaTitle);
  } else if (payload.requestType === 'collaboration') {
    form.append('organization', payload.organization);
    form.append('collaboration_type', payload.collaborationType);
  } else if (payload.requestType === 'question') {
    form.append('subject_line', payload.subject);
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      body: form,
    });

    const data = (await res.json()) as { success: boolean; message?: string };

    if (data.success) {
      return { ok: true };
    }

    return {
      ok: false,
      message: data.message ?? 'Submission failed. Please try again.',
    };
  } catch {
    return {
      ok: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
