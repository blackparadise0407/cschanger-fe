import clsx from 'clsx'
import { HTMLProps, memo } from 'react'

type InputProps = HTMLProps<HTMLInputElement> & {
    fullWidth?: boolean
}

export default memo(function Input({
    fullWidth = false,
    className,
    ...rest
}: InputProps) {
    return (
        <input
            className={clsx(
                'rounded px-3 py-1.5 font-medium text-base border border-gray-300 bg-white backdrop-blur-sm ring-2 ring-transparent focus:ring-red-300',
                fullWidth && 'w-full',
                className
            )}
            {...rest}
        />
    )
})
