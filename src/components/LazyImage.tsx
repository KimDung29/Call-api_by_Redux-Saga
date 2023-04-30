import React from "react";
import { useState } from "react";
import styled from "styled-components";

const LazyImage = (props: any) => {
  const [inView, setInView] = useState(false);

  const ref = React.useRef<HTMLImageElement>(null);

  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  React.useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  // this is a photo in view
  return inView ? (
    <Img src={props.cat.url} id={props.id} />
  ) : (
    // when scroll down and touch the first pixel of the next photo, it will be loading
    <Img ref={ref} style={{ backgroundColor: "#ccc" }} />
  );
};

export default LazyImage;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
