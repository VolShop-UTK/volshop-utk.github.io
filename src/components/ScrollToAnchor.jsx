// ScrollToAnchor.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        // If there is an anchor (#id) in the URL, scroll to that element
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If no anchor is present, scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
}

export default ScrollToAnchor;
