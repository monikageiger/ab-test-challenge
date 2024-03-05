import { useEffect, useState } from 'react'
import {
    pageViewHandler,
    signupClickHandler,
    getVariationText,
} from '../index.js'
import book from '../assets/book_header.png'

function Blog() {
    const [variationText, setVariationText] = useState(null)

    useEffect(() => {
        const variationText = getVariationText()
        setVariationText(variationText)
        pageViewHandler()
    }, [])

    return (
        <>
            <img className="blog-image" src={book} alt="book image" />
            <h1 className="blog-title">Check out the Blinkist app</h1>

            <div className="blog-description">{variationText}</div>

            <div className="blog-action">
                Thanks a lot for reading the article!
                <a
                    className="blog-signUpButton"
                    onClick={() => signupClickHandler()}
                >
                    SIGN UP
                </a>
                for Blinkist.
            </div>
        </>
    )
}

export default Blog
