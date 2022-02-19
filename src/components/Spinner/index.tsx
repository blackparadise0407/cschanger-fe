import { memo } from 'react'
import clsx from 'clsx'

import { FiLoader } from 'react-icons/fi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type SpinnerSize = 'sm' | 'md' | 'lg' | undefined

type SpinnerType = 'round' | 'line' | undefined

type SpinnerProps = {
    size?: SpinnerSize
    type?: SpinnerType
}

const _getClassFromSize = (size: SpinnerSize) => {
    switch (size) {
        case 'lg':
            return 'text-5xl'
        case 'md':
            return 'text-xl'
        case 'sm':
            return 'text-md'
        default:
            return ''
    }
}

export default memo(function Spinner({
    size = 'md',
    type = 'round',
}: SpinnerProps) {
    if (type === 'line')
        return (
            <FiLoader
                className={clsx(
                    'text-white animate-spin-slow',
                    _getClassFromSize(size)
                )}
            />
        )
    return (
        <AiOutlineLoading3Quarters
            className={clsx('text-white animate-spin', _getClassFromSize(size))}
        />
    )
})
