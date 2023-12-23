import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entitie/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
