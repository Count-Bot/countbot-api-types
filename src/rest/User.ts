import { APIAchievement } from '../payloads/Achievement.js';
import type { APICountingUser } from '../payloads/User.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPICountingUsers<T> extends BaseAuthRouteOptions<APICountingUser<T> | null> {
  Querystring: {
    userId?: string;
  };
}

export interface RESTGetAPICountingUser<T> extends BaseAuthRouteOptions<APICountingUser<T> | null> {
  Params: {
    userId: string;
  };
}

export interface RESTGetAPICountingUserLeaderboard<T> extends BaseAuthRouteOptions<APICountingUser<T>[] | null> {
  Querystring: {
    page?: number;
  };
}

export interface RESTGetAPICountingUserAchievements<T> extends BaseAuthRouteOptions<APIAchievement<T>[] | null> {
  Params: {
    userId: string;
  };
}
