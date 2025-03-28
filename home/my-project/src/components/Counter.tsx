import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);

  }, []); 
  return <h2>Window Width: {width}px</h2>;
}

export default WindowSize;