import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entitie/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>>(
        'login/loginByUsername',
        async (
            {
                username,
                password,
            },
            {
                dispatch,
                extra,
                rejectWithValue,
            },
        ) => {
            try {
                const response = await extra.api.post<User>('/login', {
                    username, password,
                });

                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                if (extra?.navigate) {
                    extra.navigate('/about');
                }
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
