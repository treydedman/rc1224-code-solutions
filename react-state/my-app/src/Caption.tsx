import { useState } from 'react';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [index, setIndex] = useState(0); // [defaultValue, setterFunction]
  console.log(index);

  function handleClick() {
    console.log('handleClick fired');
    if (index >= captions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return <h3 onClick={handleClick}>{captions[index]}</h3>;
}
