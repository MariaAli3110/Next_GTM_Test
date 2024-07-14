'use client'
import { sendGTMEvent, sendGAEvent } from '@next/third-parties/google'

 
export default function Home() {
  return (
  <div>
  <button
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event GTM
      </button>
      <button
        onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event GA
      </button>
  </div>)
}