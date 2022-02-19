import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useSelector } from 'react-redux'
import ToastItem from './ToastItem'
import { selectToasts } from './toastSelector'

type ToastContainerProps = {}

const variants: Variants = {
    initial: {
        x: 180,
        opacity: 0,
    },
    animate: { x: 0, opacity: 1 },
    exit: {
        x: 180,
        opacity: 0,
    },
}

export default function ToastContainer({}: ToastContainerProps) {
    const toasts = useSelector(selectToasts.selectAll)
    return (
        <div className="fixed flex flex-col items-end top-5 right-5 z-40 space-y-3 max-w-[500px]">
            <AnimatePresence initial={false}>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                    >
                        <ToastItem toast={toast} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
