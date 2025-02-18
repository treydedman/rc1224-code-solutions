import { FaAngleRight } from 'react-icons/fa6';

type NextProps = {
  onClick: () => void;
};
export function Next({ onClick }: NextProps) {
  return (
    <button className="next" onClick={onClick}>
      <FaAngleRight />
    </button>
  );
}
