import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import { LandingPage } from './pages/LandingPage';

export default function App() {
  return (
    <>
      <Header color="#1D62CA" />
      <Profile />
      <div className="card flex justify-content-center">
        <LandingPage></LandingPage>
      </div>
    </>
  );
}
