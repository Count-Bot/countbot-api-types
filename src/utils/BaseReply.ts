export interface BaseReply<R = null> {
  error: boolean;
  data: R;
  code?: string;
}
