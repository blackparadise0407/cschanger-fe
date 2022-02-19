import { createSelector } from 'reselect'
import { RootState } from '@csc/app/store'

export const selectAuth = (state: RootState) => state.auth

export const selectIsAuth = createSelector(selectAuth, (state) => state.isAuth)
