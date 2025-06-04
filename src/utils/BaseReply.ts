export interface BaseReply<R = null> {
  error: boolean;
  code: string;
  data: R;
}
