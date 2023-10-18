import "../../styles/header.css";
import ActionButton from "./action-button/ActionButton";

import Logo from "./logo/Logo";

interface HeaderProps {
  color: string;
}

export default function Header({ color }: HeaderProps) {

  return (
    <div className="formgrid grid">
      <div className="card m-0" style={{background: `${color}`}}>
        <div className="flex align-content-center gap-5 p-4">
          <div className="field col">
            <Logo logo_path="src/assets/education.svg" width="50" />
          </div>
          <div className="field col">
            <div className="flex justify-content-end gap-1">
              <ActionButton
                icon="pi-user"
                label="Student Login"
                color="white"
              />
              <ActionButton
                icon="pi-building"
                label="Recruiter Login"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
