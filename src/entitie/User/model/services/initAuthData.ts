import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData ',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            if (!response.id) {
                return rejectWithValue('');
            }

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
