import { useEffect, useState } from 'react'
import {
    pageViewHandler,
    signupButtonClickHandler,
    getVariationText,
} from '../index.js'

function Blog() {
    const [variationText, setVariationText] = useState(null)

    useEffect(() => {
        const variationText = getVariationText()
        setVariationText(variationText)
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

            <div>{variationText}</div>

            <div>
                Thanks a lot for reading the article!
                <a onClick={() => signupButtonClickHandler()}>SIGN UP</a>
                for Blinkist.
            </div>
        </>
    )
}

export default Blog
