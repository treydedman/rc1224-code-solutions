import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/choc-lab.png', '/power-wagon.jpg'];

const captions = ['A Beautiful Image of Space', 'A Cool Dog', 'A Cool Truck'];

const descriptions = [
  'This is a picture of stars!',
  'This is a picture of a dog!',
  'This is a picture of a truck!',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description texts={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
