export interface BaseReplyError {
  error: true;
  code: string;
}

export interface BaseReplySuccess<R> {
  error: false;
  code: string;
  data: R;
}

export type BaseReply<R> = BaseReplySuccess<R> | BaseReplyError;
