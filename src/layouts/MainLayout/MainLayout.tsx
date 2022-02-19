import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function MainLayout() {
    return (
        <div>
            <Header />
            <main className="pt-[64px] min-h-screen">
                <Outlet />
            </main>
        </div>
    )
}
