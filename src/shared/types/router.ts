import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entitie/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
