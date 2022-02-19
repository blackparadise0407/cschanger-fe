declare global {
    type TLayoutProps = {}

    interface IConfigurationState {
        lang: string
    }

    interface IAuthState {
        isAuth: boolean
    }

    interface IToastState {
        toasts: Array<IToast>
    }

    interface IToast extends TToastEnqueueOptions {
        id: string
        message: string
        createdAt: number
    }

    type TToastEnqueueOptions = {
        variant?: TToastVariant
    }

    type TToastVariant = 'success' | 'warning' | 'error' | 'default' | undefined

    type TLoadingState =
        | 'initial'
        | 'fetching'
        | 'creating'
        | 'updating'
        | 'deleting'
        | 'fulfill'
}

export {}
