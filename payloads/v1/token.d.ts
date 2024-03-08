import { RoutePermission } from '../../utils/token.js';
export interface APIToken {
    token: string;
    permissions: RoutePermission[];
    userId: string | null;
}
