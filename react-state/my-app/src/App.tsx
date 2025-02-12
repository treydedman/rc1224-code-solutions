import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

// const src = '/starry-sky.jpeg';
const srcs = ['/starry-sky.jpeg', '/choc-lab.png', '/power-wagon.jpg'];
// const caption = 'A Beautiful Image of Space';
const captions = ['A Beautiful Image of Space', 'A Cool Dog', 'A Cool Truck'];
// const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//   Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
//   commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas
//   rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
//   error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur
//   labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
//   dicta sunt laborum similique repellat?`;
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
