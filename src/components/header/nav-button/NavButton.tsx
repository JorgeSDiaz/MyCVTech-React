import { Link } from "react-router-dom";

interface NavButtonProps {
  label: string;
  direction: string;
  icon?: string;
}

export default function ActionButton({
  label,
  direction,
  icon,
}: NavButtonProps) {
  return (
    <Link to={direction} className={`text-white no-underline`}>
      {icon && <i className={`pi pi-${icon} px-2`}></i>}
      {label}
    </Link>
  );
}
