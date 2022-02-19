import axios, { AxiosRequestConfig, Method } from 'axios'
import { get } from 'lodash'
import qs from 'qs'

import i18n from '@csc/app/i18n'

const BASE_URL = process.env.BASE_URL

let cachedReqConf: Partial<AxiosRequestConfig> & { called?: boolean } = {}

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => qs.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    cachedReqConf = config
    cachedReqConf.called = false
    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    (error) => {
        const { status } = error
        if (status === 403 && !cachedReqConf.called) {
            cachedReqConf.called = true
        }
        const message = get(
            error,
            ['response', 'message'],
            i18n.t('server.error')
        )
        return Promise.reject(new Error(message))
    }
)

export const request = (method: Method, url: string, data?: any) => {
    const config: AxiosRequestConfig = {
        method,
        url,
    }

    if (method === 'GET' || method === 'get') {
        config.params = data
    }

    return axiosClient.request(config)
}
