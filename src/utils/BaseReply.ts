export interface BaseReply<R = null, C = number> {
  error: boolean;
  code?: C;
  data?: R;
}
