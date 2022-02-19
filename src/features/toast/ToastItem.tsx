import { memo, useCallback, useEffect } from 'react'

import { useAppDispatch } from '@csc/hooks/common'
import { dequeue } from './toastSlice'
import clsx from 'clsx'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type ToastItemProps = {
    toast: IToast
}

const _getClassFromVariant = (variant: TToastVariant) => {
    switch (variant) {
        case 'success':
            return 'bg-green-500 text-white'
        case 'warning':
            return 'bg-yellow-500 text-white'
        case 'error':
            return 'bg-red-500 text-white'
        case 'default':
            return 'bg-gray-50 text-black'
        default:
            return ''
    }
}

export default memo(function ToastItem({ toast }: ToastItemProps) {
    const dispatch = useAppDispatch()

    const { message } = toast

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(dequeue(toast.id))
        }, 4000)
        return () => {
            clearInterval(interval)
        }
    }, [dispatch, toast.id])

    const handleRemove = useCallback(() => {
        dispatch(dequeue(toast.id))
    }, [dispatch, toast.id])

    return (
        <div
            className={clsx(
                'relative w-fit min-w-[300px] pl-5 pr-8 py-3 rounded shadow text-base font-medium',
                _getClassFromVariant(toast.variant)
            )}
        >
            <span>{message}</span>
            <AiOutlineCloseCircle
                size={22}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={handleRemove}
            />
        </div>
    )
})
