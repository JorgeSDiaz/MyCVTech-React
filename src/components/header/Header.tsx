import "../../styles/header.css";

import Logo from "./logo/Logo";
import NavButton from "./nav-button/NavButton";

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
            <div className="flex justify-content-end gap-4 py-3">
              <NavButton label="Login Recruiter" direction="/loginrecruiter" icon="building"/>
              <NavButton label="Login User" direction="/login" icon="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
