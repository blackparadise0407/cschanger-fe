import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center flex-col items-center space-y-5">
            <p className="text-lg">
                <b>404</b> Page not found
            </p>
            <Link
                className="text-sm hover:text-blue-500 hover:underline transition-colors"
                to="/"
            >
                Back to home page
            </Link>
        </div>
    )
}
