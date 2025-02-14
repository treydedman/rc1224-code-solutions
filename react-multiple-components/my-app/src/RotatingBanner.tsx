type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  console.log(items);

  return (
    <>
      <Banner item="Aardvark" />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
    </>
  );
}

function Banner({ item }: { item: string }) {
  return <h1>{item}</h1>;
}

function NextButton() {
  return <button>Next</button>;
}

function PrevButton() {
  return <button>Prev</button>;
}

function Indicators({ count }: { count: number }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button key={i}>{i}</button>);
  }
  return <div>{buttons}</div>;
}
