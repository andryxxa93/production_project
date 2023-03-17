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
