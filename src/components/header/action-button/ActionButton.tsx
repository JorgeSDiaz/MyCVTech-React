import { Button } from "primereact/button";

interface ActionButtonProps {
  icon: string;
  label: string;
  color: string;
}

export default function ActionButton({
  icon,
  label,
  color,
}: ActionButtonProps) {
  return (
    <Button
      icon={`pi ${icon}`}
      label={label}
      className={`button text-${color}`}
      text
      rounded
    />
  );
}
