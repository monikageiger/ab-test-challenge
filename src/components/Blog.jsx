import { useEffect, useState } from 'react'
import {
    pageViewHandler,
    signupButtonClickHandler,
    getVariation,
} from '../index.js'

function Blog() {
    const [variation, setVariation] = useState(null)

    useEffect(() => {
        const variation = getVariation()
        setVariation(variation)
        pageViewHandler()
    }, [])
    
    return (
        <>
            <h1>Check out the Blinkist app</h1>

            <img
                width="300"
                src="images/hero_image.jpg"
                alt="Check out the Blinkist app"
            />
            {/* Control variation */}
            {variation === 'control' && (
                <div>Meet the app that revolutionized reading.</div>
            )}
            {/* Test variation */}
            {variation === 'test' && (
                <div>Meet the app that has 18 million users.</div>
            )}

            <div>
                Thanks a lot for reading the article!
                <a onClick={() => signupButtonClickHandler()}>SIGN UP</a>
                for Blinkist.
            </div>
        </>
    )
}

export default Blog
