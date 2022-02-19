export const getBrowserInfo = () => {
    const language = navigator.language
    let supportedCurrencyCode = 'VND'
    switch (language) {
        case 'en-US':
        case 'en':
            supportedCurrencyCode = 'USD'
            break
        case 'vi-VN':
        case 'vi':
            supportedCurrencyCode = 'VND'
            break
        default:
            break
    }

    return {
        language: navigator.language,
        currencyCode: supportedCurrencyCode,
    }
}
