/**
 * Tracks a page view to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL is probably a good start though.
 */
export const trackPageView = (params) => {
    console.log(`--> Tracking Pageview: ${JSON.stringify(params)}`)
}

/**
 * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL and an event name are probably a good start though.
 */
export const trackEvent = (params) => {
    console.log(`--> Tracking Event: ${JSON.stringify(params)}`)
}
