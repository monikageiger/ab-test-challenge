import { trackPageView, trackEvent } from './utils/analytics-api'
import text from './data/text.json'

const USER_ID_KEY = 'userId'
const VARIATION_KEY = 'variation'
const PAGE_VIEW_KEY = 'pageView'
const SIGN_UP_BUTTON_CLICK_COUNT_KEY = 'signUpButtonClickCount'

function getFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue
}

function incrementInLocalStorage(key) {
    const count = parseInt(localStorage.getItem(key)) || 0
    localStorage.setItem(key, count + 1)
    return count + 1
}

export function getUserId() {
    let userId = getFromLocalStorage(USER_ID_KEY, crypto.randomUUID())
    localStorage.setItem(USER_ID_KEY, userId)
    return userId
}

export function getVariation() {
    let variation = getFromLocalStorage(
        VARIATION_KEY,
        Math.random() < 0.5 ? 'test' : 'control'
    )

    localStorage.setItem(VARIATION_KEY, variation)

    return variation
}

export function getVariationText() {
    return text[getVariation()] || text.test
}

export const pageViewHandler = () => {
    const pageViewCount = incrementInLocalStorage(PAGE_VIEW_KEY)

    const data = {
        eventName: 'pageView',
        userId: getUserId(),
        url: window.location.pathname,
        variation: getVariation(),
        pageViewCount,
    }
    trackPageView(data)
}

export const signupButtonClickHandler = () => {
    const signUpButtonClickCount = incrementInLocalStorage(
        SIGN_UP_BUTTON_CLICK_COUNT_KEY
    )
    const data = {
        eventName: 'signUpClicked',
        userId: getUserId(),
        url: window.location.pathname,
        variation: getVariation(),
        conversion: signUpButtonClickCount === 1,
        signUpButtonClickCount,
        pageViewCount: getFromLocalStorage(PAGE_VIEW_KEY, 0),
    }

    trackEvent(data)
}
