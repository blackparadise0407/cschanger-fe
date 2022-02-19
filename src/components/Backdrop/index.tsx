import { memo, ReactNode } from 'react'

type BackdropProps = {
    children: ReactNode
    onBackdropClick?: () => void
}

export default memo(function Backdrop({
    children,
    onBackdropClick,
}: BackdropProps) {
    return (
        <div
            className="fixed top-0 left-0 bottom-0 right-0 bg-gray-900 bg-opacity-30 grid place-items-center z-50"
            onClick={onBackdropClick}
        >
            <div>{children}</div>
        </div>
    )
})
