export {
    Profile,
    ProfileSchema,
} from './model/types/Profile';

export {
    profileActions,
    profileReducer,
} from './model/Slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
