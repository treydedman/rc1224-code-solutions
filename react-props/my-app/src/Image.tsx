import './Image.css';

type Props = {
  src: string;
};

export function Image({ src }: Props) {
  return <img src={src} alt="Starry Sky" width="50%" />;
}
