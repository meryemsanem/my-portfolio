import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles.css';

const Homepage = () => {
  const typedText = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'a full-stack developer',
        'a front-end developer',
        'a back-end developer',
        'a software developer',
      ],
      typeSpeed: 80,
      loop: true,
      backSpeed: 30,
    };

    const typed = new Typed(typedText.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="homepage">
      <div className="homepage-content">
        <h1>Hi, I&apos;m Meryem Sanem Küçükbayram</h1>
        <p>
          <span ref={typedText} />
        </p>
      </div>
    </section>
  );
};

export default Homepage;
