import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const imageSrc = '/starry-sky.jpeg';
const imageCaption = 'A beautiful Image of Space';
const imageDescription = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt
      sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
      commodi placeat eveniet, quam voluptates facere et magnam architecto
      quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam
      quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos
      autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore
      pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt
      laborum similique repellat?`;

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imageSrc} />
      <Caption text={imageCaption} />
      <Description text={imageDescription} />
      <Button label="Click For Next Image" />
    </>
  );
}
