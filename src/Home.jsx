import React, { useState } from 'react'
import UrlInput from './Components/UrlInput';
import UrlOutputs from './Components/UrlOutputs';

import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

function Home() {
    const [shortUrls, setShortUrls] = useState([])
    const gaEventTracker = useAnalyticsEventTracker('URL Shorten');
  
    const handleUrls = (url) => {
        let newUrls = [...shortUrls];
        newUrls.push(url);
        setShortUrls(newUrls);
        gaEventTracker('update URL')
    }
    return (
        <div className='home'>
            <h1>More than just shorter links</h1>

            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <UrlInput shortUrls={shortUrls} handleUrls={handleUrls} />
            <UrlOutputs shortUrls={shortUrls} />
            {/* <button onClick={methodDoesNotExist}></button> */}
        </div>
    )
}

export default Home