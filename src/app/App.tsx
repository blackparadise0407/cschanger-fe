import { Fragment, lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import { NotFound } from '@csc/components'
import { MainLayout } from '@csc/layouts/MainLayout'
import ToastContainer from '@csc/features/toast/ToastContainer'

const LoginRoute = lazy(() => import('@csc/features/auth/Login'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <div /> },
            { path: '/login', element: <LoginRoute /> },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]

function App() {
    return (
        <Fragment>
            {useRoutes(routes)}
            <ToastContainer />
        </Fragment>
    )
}

export default App
