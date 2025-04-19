import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const dotTrail = document.querySelector('.cursor-trail');

    const mouseMove = (e) => {
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;

      dotTrail.style.top = `${e.clientY - 5}px`;
      dotTrail.style.left = `${e.clientX - 5}px`;
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor"></div>
      <div className="cursor-trail"></div>

    </div>
  );
};

export default Cursor;
