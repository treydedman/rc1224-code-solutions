import { useState } from 'react';
import { TopicCard } from './TopicCard.tsx';
import type { Topic } from './App.tsx';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={open === topic.id}
          onClick={() => setOpen(open === topic.id ? 0 : topic.id)}
        />
      ))}
    </div>
  );
}
