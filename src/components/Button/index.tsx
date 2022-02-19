import clsx from 'clsx'
import { HTMLProps, memo } from 'react'
import { Spinner } from '..'

type ButtonType = 'primary' | 'secondary' | 'ghost' | 'default'

type ButtonHTMLType = 'button' | 'submit' | 'reset' | undefined

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'> & {
    htmlType?: ButtonHTMLType
    type?: ButtonType
    block?: boolean
    disabled?: boolean
    loading?: boolean
}

const _getButtonClsByType = (type: ButtonType) => {
    switch (type) {
        case 'primary':
            return 'bg-red-500 text-white hover:bg-red-400'
        case 'secondary':
            return 'bg-indigo-500 text-white hover:bg-indigo-400'
        case 'ghost':
            return 'bg-transparent text-black hover:underline'
        case 'default':
            return 'bg-gray-100 text-black hover:bg-gray-200'

        default:
            return ''
    }
}

export default memo(function Button({
    htmlType = 'button',
    type = 'default',
    children,
    className,
    block = false,
    disabled = false,
    loading = false,
    ...rest
}: ButtonProps) {
    return (
        <button
            className={clsx(
                'px-5 py-2 flex justify-center items-center space-x-2 font-bold text-base rounded transition-all',
                _getButtonClsByType(type),
                block && 'w-full',
                disabled && 'pointer-events-none bg-slate-300',
                className
            )}
            type={htmlType}
            {...rest}
        >
            {loading && <Spinner size="md" />}
            {typeof children === 'string' ? <span>{children}</span> : children}
        </button>
    )
})
