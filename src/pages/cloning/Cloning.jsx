import React, { useEffect } from 'react'
// import css from './cloning.module.css'
import Section2 from '../services/Section2'
const Cloning = () => {
  useEffect(() => {
    window.scrollTo(0, 500);

  }, []);
  return (
    <div>
      <Section2 title="Voice Cloning" cloning="true" />
    </div>
  )
}

export default Cloning