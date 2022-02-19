import authReducer from '@csc/features/auth/authSlice'
import configReducer from '@csc/features/configuration/configSlice'
import toastReducer from '@csc/features/toast/toastSlice'
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage: sessionStorage,
//     whitelist: ['auth'],
// }

import { combineReducers, EntityState } from '@reduxjs/toolkit'

export interface AppState {
    configuration: IConfigurationState
    auth: IAuthState
    toast: EntityState<IToast>
}

const rootReducer = combineReducers<AppState>({
    configuration: configReducer,
    auth: authReducer,
    toast: toastReducer,
})

export default rootReducer
