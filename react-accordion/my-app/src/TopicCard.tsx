import type { Topic } from './App';

type CardProps = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};

export function TopicCard({ topic, isOpen, onClick }: CardProps) {
  return (
    <div onClick={onClick}>
      <h2>{topic.title}</h2>
      {isOpen && <p>{topic.content}</p>}
    </div>
  );
}
