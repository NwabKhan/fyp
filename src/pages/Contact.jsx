import React, { useEffect } from 'react'
import LandingContact from './landing/LandingContact'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingContact />
    </div>
  )
}

export default Contact