import { RootState } from '@csc/app/store'
import { toastAdapter } from './toastSlice'

export const selectToasts = toastAdapter.getSelectors(
    (state: RootState) => state.toast
)
