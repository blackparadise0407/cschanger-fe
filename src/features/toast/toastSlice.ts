import { store } from '@csc/app/store'
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { v4 } from 'uuid'

export const toastAdapter = createEntityAdapter<IToast>({
    selectId: (toast) => toast.id,
    sortComparer: (a, b) => a.createdAt - b.createdAt,
})

export const toastSlice = createSlice({
    name: 'toast',
    initialState: toastAdapter.getInitialState(),
    reducers: {
        enqueue: (
            state,
            {
                payload,
            }: PayloadAction<{ message: string; opts: TToastEnqueueOptions }>
        ) => {
            const {
                message,
                opts: { variant = 'default', ...rest },
            } = payload
            const toast: IToast = {
                id: v4(),
                message,
                createdAt: new Date().getTime(),
                variant,
                ...rest,
            }
            toastAdapter.addOne(state, toast)
        },
        dequeue: (state, { payload }: PayloadAction<string>) => {
            toastAdapter.removeOne(state, payload)
        },
    },
})

export const { enqueue, dequeue } = toastSlice.actions

export const enqueueMessage = (message: string, opts: TToastEnqueueOptions) =>
    enqueue({ message, opts })

export default toastSlice.reducer
