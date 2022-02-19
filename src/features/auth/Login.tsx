import { background, marshmallow } from '@csc/assets/images'
import { BackdropLoader, Button, Input } from '@csc/components'
import { useAppDispatch } from '@csc/hooks/common'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { enqueue, enqueueMessage } from '../toast/toastSlice'

export default function Login() {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const canSubmit = useMemo(() => {
        const { email, password } = form
        return !!email && !!password
    }, [form])

    const handleFormValuesChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
        },
        []
    )

    const handleSubmit = () => {
        alert(JSON.stringify(form))
    }

    return (
        <div
            className="relative h-[calc(100vh-64px)] px-10 flex flex-col items-center"
            style={{
                background: `url(${background}) center no-repeat`,
                backgroundSize: 'cover',
            }}
        >
            <img
                className="absolute left-[10px] bottom-0 w-[600px] hidden md:block md:left-[10px] lg:left-[50px] xl:left-[100px] animate-pulse"
                src={marshmallow}
                alt=""
            />
            <div className="mt-20 ml-0 md:ml-[300px] lg:ml-[500px] bg-white w-full max-w-[520px] rounded p-5 space-y-5 z-10 shadow">
                <h1 className="font-bold text-xl">{t('login.title')}</h1>
                <div className="grid grid-cols-5 items-center">
                    <label className="col-span-1 font-medium" htmlFor="email">
                        {t('global.email')}
                    </label>
                    <Input
                        className="col-span-4"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFormValuesChange}
                        placeholder={t('login.emailPlaceholder')}
                    />
                </div>
                <div className="grid grid-cols-5 items-center">
                    <label
                        className="col-span-1 font-medium"
                        htmlFor="password"
                    >
                        {t('global.password')}
                    </label>
                    <Input
                        className="col-span-4"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleFormValuesChange}
                        placeholder={t('login.passwordPlaceholder')}
                    />
                </div>
                <Link
                    to="/forget-password"
                    className="inline-block font-medium float-right text-sm text-gray-500 hover:text-gray-400"
                >
                    {t('login.forgotPassword')}
                </Link>
                <Button
                    type="primary"
                    block
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                >
                    {t('global.login')}
                </Button>
                <hr />
                <div className="flex justify-center items-center space-x-5 text-base font-medium">
                    <div className="px-3 py-1.5 rounded flex items-center space-x-2 text-[#f20000] shadow-md hover:bg-gray-100 transition-colors cursor-pointer border border-gray-50">
                        <FaGoogle />
                        <span>Google</span>
                    </div>
                    <div className="px-3 py-1.5 rounded flex items-center space-x-2 text-[#1877f1] shadow-md hover:bg-gray-100 transition-colors cursor-pointer border border-gray-50">
                        <FaFacebookF />
                        <span>Facebook</span>
                    </div>
                </div>

                <Button type="secondary" block onClick={() => {}}>
                    {t('global.register')}
                </Button>
            </div>
        </div>
    )
}
