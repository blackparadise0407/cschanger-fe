import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: IAuthState = {
    isAuth: false,
}

export const loginDispatch = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try {
            console.log(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginDispatch.fulfilled, (state, { payload }) => {
            state.isAuth = true
        })
    },
})

// export const {} = authSlice.actions

export default authSlice.reducer
