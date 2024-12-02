"use client"
import { useEffect } from 'react';
import { useDax } from '../context/dax-context';

const LinkHoverListener = () => {
  const { handleMouseEnter } = useDax();
  useEffect(() => {
    const links = document.querySelectorAll('a');
    const handleClick = (event: any) => {
      handleMouseEnter(event);
    };
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    document.addEventListener('click', handleClick);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
      document.removeEventListener('click', handleClick);
    };
  }, [handleMouseEnter]);

  return null;
};

export default LinkHoverListener;
