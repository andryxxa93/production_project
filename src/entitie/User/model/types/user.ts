import { UserRole } from '../consts/consts';
import { FeatureFlags } from '@/shared/types/featureFlag';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
