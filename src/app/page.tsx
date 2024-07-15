'use client'
import { sendGTMEvent, sendGAEvent } from '@next/third-parties/google'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
 
export default function Home() {
  const GTM_ID = 'GTM-W9FPQCL8';
  const initializeGTM = () => {
    TagManager.initialize({ gtmId: GTM_ID });
  };

  const trackPageView = (url: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        page: url
      }
    });
  };
  
  const trackEvent = (eventName:string, eventProps: any) => {
    TagManager.dataLayer({
      dataLayer: {
        event: eventName,
        ...eventProps
      }
    });
  };
  
  useEffect(() => {
    initializeGTM();
    trackPageView('/home');
  }, []);

  const clickHandler = () => {
    sendGTMEvent({ event: 'buttonClicked', value: 'xyz' }); 
    trackEvent('buttonClicked', { category: 'Navigation', label: 'Homepage' });
  }

  return (
  <div>
  <button
        onClick={clickHandler}
      >
        Send Event GTM Fire Tag
      </button>
      <button
        onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event GA
      </button>
  </div>)
}