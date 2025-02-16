import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // handleNextClick
  function handleNextClick() {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  // handlePrevClick
  function handlePrevClick() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1);
    }
  }

  // handleSelect
  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton onHandlePrevClick={handlePrevClick} />
      <Indicators
        count={items.length}
        current={currentIndex}
        onSelect={handleSelect}
      />
      <NextButton onHandleNextClick={handleNextClick} />
    </>
  );
}

type BannerProps = {
  item: string;
};
function Banner({ item }: BannerProps) {
  return <h1>{item}</h1>;
}

type NextButtonProps = {
  onHandleNextClick: () => void;
};
function NextButton({ onHandleNextClick }: NextButtonProps) {
  return (
    <button
      style={{
        backgroundColor: 'white',
        border: '4px solid #aaa',
        margin: '1px',
        color: 'black',
        cursor: 'pointer',
      }}
      onClick={onHandleNextClick}>
      Next
    </button>
  );
}

type PrevButtonProps = {
  onHandlePrevClick: () => void;
};
function PrevButton({ onHandlePrevClick }: PrevButtonProps) {
  return (
    <button
      style={{
        backgroundColor: 'white',
        border: '4px solid #aaa',
        margin: '1.5px',
        color: 'black',
        cursor: 'pointer',
      }}
      onClick={onHandlePrevClick}>
      Prev
    </button>
  );
}

type IndicatorProps = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};
function Indicators({ count, current, onSelect }: IndicatorProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{
          backgroundColor: i === current ? 'lightblue' : 'white',
          border: '4px solid #aaa',
          margin: '1.5px',
          color: 'black',
          cursor: 'pointer',
        }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
