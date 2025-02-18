import { FaAngleRight } from 'react-icons/fa6';

type NextProps = {
  onClick: () => void;
};
export function Next({ onClick }: NextProps) {
  return (
    <button onClick={onClick}>
      <FaAngleRight />
    </button>
  );
}
