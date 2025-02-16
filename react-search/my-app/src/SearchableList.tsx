import { useState } from 'react';

type Props = {
  list: string[];
};

export default function SearchableList({ list }: Props) {
  // const userInput = 'youz'; // imagine a user typed this in the input and we captured it as state
  const [userInput, setUserInput] = useState('');
  const filteredList = list.filter((quote) =>
    quote.toLowerCase().includes(userInput.toLowerCase())
  );

  const handleSearchInput = (value: string) => {
    setUserInput(value);
  };

  return (
    <>
      <SearchBar onHandleSearchInput={handleSearchInput} />
      <Items list={filteredList} />
    </>
  );
}

type SearchBarProps = {
  onHandleSearchInput: (value: string) => void;
};
function SearchBar({ onHandleSearchInput }: SearchBarProps) {
  return (
    <input
      type="text"
      onChange={(e) => onHandleSearchInput(e.target.value)}
      placeholder="search"
    />
  );
}

type ItemsProps = {
  list: string[];
};
function Items({ list }: ItemsProps) {
  // add logic if list.length === 0 display 'no matches'
  if (list.length === 0) {
    return <p>No matches found</p>;
  }
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
