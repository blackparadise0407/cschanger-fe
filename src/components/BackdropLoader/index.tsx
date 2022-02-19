import { Backdrop, Spinner } from '..'

export default function BackdropLoader() {
    return (
        <Backdrop>
            <Spinner size="lg" type="line" />
        </Backdrop>
    )
}
