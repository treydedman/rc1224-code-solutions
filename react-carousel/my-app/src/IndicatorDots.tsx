import { FaRegCircle, FaCircle } from 'react-icons/fa6';

type IndicatorDotsProps = {
  images: { src: string; alt: string }[];
  active: number;
  onClick: (index: number) => void;
};

export function IndicatorDots({ images, active, onClick }: IndicatorDotsProps) {
  return (
    <div className="indicator-dots">
      {images.map((image, index) => (
        <span key={index} onClick={() => onClick(index)}>
          {active === index ? <FaCircle /> : <FaRegCircle />}
        </span>
      ))}
    </div>
  );
}
