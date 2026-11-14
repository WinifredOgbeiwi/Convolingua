import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AssessmentPage from './pages/AssessmentPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import ProfessionalsPage from './pages/ProfessionalsPage'
import RoboticsPage from './pages/RoboticsPage'
import KidsPage from './pages/KidsPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import './styles/landing.css'
import './styles/home.css'
import './styles/professionals.css'
import './styles/robotics.css'
import './styles/kids.css'
import './styles/login.css'
import './styles/book-now.css'
import './styles/animations.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="professionals" element={<ProfessionalsPage />} />
          <Route path="robotics" element={<RoboticsPage />} />
          <Route path="kids" element={<KidsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="assessment" element={<AssessmentPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
