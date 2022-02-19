import { RootState } from '@csc/app/store'
import { createSelector } from 'reselect'

export const selectConfig = (state: RootState) => state.configuration

export const selectLanguage = createSelector(
    selectConfig,
    (config) => config.lang
)
