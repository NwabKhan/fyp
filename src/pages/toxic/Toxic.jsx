import React, { useEffect } from 'react'
import Section2 from '../services/Section2'

const Toxic = () => {
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div>
      <Section2 title="Toxic Content Detection" service={"toxic"} />
    </div>
  )
}

export default Toxic