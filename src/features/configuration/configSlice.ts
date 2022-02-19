import { getBrowserInfo } from '@csc/utils/browser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IConfigurationState = {
    lang: getBrowserInfo().language,
}

export const configSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }: PayloadAction<string>) => {
            state.lang = payload
        },
    },
})

export const { changeLanguage } = configSlice.actions

export default configSlice.reducer
