type Props = {
  label: string;
  onClick: () => void;
};
export function Button({ label, onClick }: Props) {
  // deleted the alert message created in stage 1
  return <button onClick={onClick}>{label}</button>;
}
