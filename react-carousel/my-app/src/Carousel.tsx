import { useEffect, useCallback, useState } from 'react';
import type { Image } from './App';
import { IndicatorDots } from './IndicatorDots.tsx';
import { Next } from './Next.tsx';
import { Prev } from './Prev.tsx';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [active, setActive] = useState(0);

  const currentImage = images[active];

  const handleNext = useCallback(() => {
    const prevActive = (active + 1) % images.length;
    setActive(prevActive);
  }, [images, active]);

  function handlePrev() {
    setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const timeOut = setTimeout(handleNext, 3000);
    return () => clearTimeout(timeOut);
  }, [handleNext]);

  return (
    <div>
      <div className="image-wrapper">
        <img
          className="current-image"
          src={currentImage.src}
          alt={currentImage.alt}
        />
      </div>
      <Prev onClick={handlePrev} />
      <Next onClick={handleNext} />
      <IndicatorDots images={images} active={active} onClick={setActive} />
    </div>
  );
}
