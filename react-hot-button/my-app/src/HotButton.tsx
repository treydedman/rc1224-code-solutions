import { useState } from 'react';

export function HotButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const message = `Clicks: ${clickCount}`;

  function getButtonColor(clickCount: number): string {
    if (clickCount >= 16) {
      return 'nuclear';
    } else if (clickCount >= 13) {
      return 'hot';
    } else if (clickCount >= 10) {
      return 'warm';
    } else if (clickCount >= 7) {
      return 'tepid';
    } else if (clickCount >= 4) {
      return 'cool';
    } else {
      return 'cold';
    }
  }

  return (
    <div>
      <button
        className={`hot-button ${getButtonColor(clickCount)}`}
        onClick={handleClick}>
        Hot Button
      </button>
      <p>{message}</p>
    </div>
  );
}
