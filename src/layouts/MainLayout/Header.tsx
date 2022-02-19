import { Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { logo } from '@csc/assets/images'
import { Button } from '@csc/components'
import { selectIsAuth } from '@csc/features/auth/authSelector'
import { selectLanguage } from '@csc/features/configuration/configSelector'
import { useAppSelector } from '@csc/hooks/common'
import { getBrowserInfo } from '@csc/utils/browser'

type UserProps = {
    lang: string
    currencyCode: string
}

const RenderUser = memo(({ lang, currencyCode }: UserProps) => {
    return (
        <Fragment>
            <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-100 hover:text-red-500 cursor-pointer transition-colors">
                <AiOutlinePlus />
                <span className="font-medium text-base">
                    {new Intl.NumberFormat(lang, {
                        style: 'currency',
                        currency: currencyCode,
                    }).format(10000)}
                </span>
            </div>
            <img
                className="w-9 h-9 rounded-full hover:ring-2 hover:ring-red-300 transition-all"
                src="https://i.pravatar.cc/30"
                alt="user-avatar"
            />
        </Fragment>
    )
})

const RenderGuest = memo(() => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <Link to="/login">
                <Button type="primary" className="capitalize">
                    {t('global.login')}
                </Button>
            </Link>
        </Fragment>
    )
})

export default function Header() {
    const { currencyCode } = getBrowserInfo()
    const lang = useAppSelector(selectLanguage)
    const isAuth = useAppSelector(selectIsAuth)

    return (
        <header className="fixed top-0 left-0 w-full h-[64px] px-5 py-2 flex items-center bg-white shadow-md z-10">
            <Link to="/" className="flex items-center space-x-5">
                <img className="w-10" src={logo} alt="app-logo" />
                <span className="font-bold uppercase">CSChanger</span>
            </Link>
            <div className="flex-grow"></div>
            <div className="flex items-center space-x-5">
                {isAuth ? (
                    <RenderUser lang={lang} currencyCode={currencyCode} />
                ) : (
                    <RenderGuest />
                )}
            </div>
        </header>
    )
}
