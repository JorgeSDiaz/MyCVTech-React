import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import { LoginPage } from "./pages/LoginPage" // Asumiendo que tienes un componente de Login
import { LandingPage } from './pages/LandingPage';
import { LoginRecruiter } from './pages/LoginRecuiter';
import { ForgetPassword } from './pages/forgetPassword';

export default function App() {
  return (
      <>
        <Header color="#1D62CA" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/loginRecuiter" element={<LoginRecruiter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </>
  );
}
