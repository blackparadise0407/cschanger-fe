import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// I18n instance
import './app/i18n'

import App from '@csc/app/App'
import { store } from '@csc/app/store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { BackdropLoader } from './components'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<BackdropLoader />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
