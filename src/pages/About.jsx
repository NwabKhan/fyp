import React, {useEffect} from 'react'
import Hero from '../components/home_helpers/Hero'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
    </div>
  )
}

export default About