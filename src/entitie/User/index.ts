export { initAuthData } from './model/services/initAuthData';

export { useJsonSettings } from './model/selectors/getJsonSettings/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { UserRole } from '../User/model/consts/consts';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/rolesSelector/rolesSelector';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
