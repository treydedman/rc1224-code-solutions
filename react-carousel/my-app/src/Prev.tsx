import { FaAngleLeft } from 'react-icons/fa6';

type PrevProps = {
  onClick: () => void;
};

export function Prev({ onClick }: PrevProps) {
  return (
    <button onClick={onClick}>
      <FaAngleLeft />
    </button>
  );
}
