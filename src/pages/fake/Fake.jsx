import React, { useEffect } from "react";
import Section2 from "../services/Section2";
const Fake = () => {
  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);
  return (
    <div>
      <Section2 title="Fake Content Detection" />
    </div>
  );
};

export default Fake;
