import { trackPageView, trackEvent } from './utils/analytics-api'
import text from './data/text.json'

const USER_ID_KEY = 'USER_ID'
const VARIATION_KEY = 'VARIATION'
const PAGE_VIEW_KEY = 'PAGE_VIEW'
const SIGN_UP_CLICK_COUNT_KEY = 'SIGN_UP_CLICK_COUNT'

/**
 * Retrieves a value from localStorage, or returns a default value if not found.
 */
function getFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue
}

/**
 * Increments a numeric value in localStorage.
 */
function incrementInLocalStorage(key) {
    const count = parseInt(localStorage.getItem(key)) || 0
    localStorage.setItem(key, count + 1)
    return count + 1
}

/**
 * Retrieves the user ID from localStorage, or generates a new one if not found.
 */
export function getUserId() {
    let userId = getFromLocalStorage(USER_ID_KEY, crypto.randomUUID())
    localStorage.setItem(USER_ID_KEY, userId)
    return userId
}

/**
 * Retrieves the variation from localStorage, or generates a new one if not found.
 */
export function getVariation() {
    let variation = getFromLocalStorage(
        VARIATION_KEY,
        Math.random() < 0.5 ? 'test' : 'control'
    )

    localStorage.setItem(VARIATION_KEY, variation)

    return variation
}

/**
 * Retrieves the text associated with the current variation.
 */
export function getVariationText() {
    return text[getVariation()] || text.test
}

/**
 * Handles a page view event.
 */
export const pageViewHandler = () => {
    const pageViewCount = incrementInLocalStorage(PAGE_VIEW_KEY)

    const data = {
        event_name: 'page_view',
        user_id: getUserId(),
        url: window.location.pathname,
        variation: getVariation(),
        page_view_count: pageViewCount,
    }

    trackPageView(data)
}

/**
 * Handles a sign up button click event.
 */
export const signupClickHandler = () => {
    const signUpClickCount = incrementInLocalStorage(SIGN_UP_CLICK_COUNT_KEY)

    const data = {
        event_name: 'sign_up_click',
        user_id: getUserId(),
        url: window.location.pathname,
        variation: getVariation(),
        page_view_count: getFromLocalStorage(PAGE_VIEW_KEY),
        conversion: signUpClickCount === 1,
        sign_up_click_count: signUpClickCount,
    }

    trackEvent(data)
}
