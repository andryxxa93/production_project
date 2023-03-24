export {
    Profile,
    ProfileScheme,
} from '../Profile/model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './services/fetchProfileData/fetchProfileData';

export { ProfileCard } from 'entitie/Profile/ui/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
export { updateProfileData } from './services/updateProfileData/updateProfileData';
