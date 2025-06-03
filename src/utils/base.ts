export interface BaseAuthRouteOptions<R = null, C = number> {
  Header: {
    Authorization: string;
  };
  Reply: {
    error: boolean;
    message: string;
    code?: C;
    data?: R;
  };
}
