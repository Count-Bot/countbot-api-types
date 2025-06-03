export interface BaseReply<R = null, C = number> {
  error: boolean;
  code?: string;
  data?: R;
}
