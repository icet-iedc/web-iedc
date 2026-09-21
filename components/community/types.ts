export type CommunityRequestType =
  | 'join'
  | 'idea'
  | 'collaboration'
  | 'question';

// Modal view state
export type ModalView = 'options' | 'form';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface BaseFormPayload {
  requestType: CommunityRequestType;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface JoinFormPayload extends BaseFormPayload {
  requestType: 'join';
  department: string;
  year: string;
}

export interface IdeaFormPayload extends BaseFormPayload {
  requestType: 'idea';
  ideaTitle: string;
}

export interface CollaborationFormPayload extends BaseFormPayload {
  requestType: 'collaboration';
  organization: string;
  collaborationType: string;
}

export interface QuestionFormPayload extends BaseFormPayload {
  requestType: 'question';
  subject: string;
}

export type FormPayload =
  | JoinFormPayload
  | IdeaFormPayload
  | CollaborationFormPayload
  | QuestionFormPayload;
