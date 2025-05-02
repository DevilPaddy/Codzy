import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';


import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import EmailVerification from './pages/EmailVerification';
import useAuthStore from './store/authStore';
import Home from './pages/Home';
import LoadingSpinner from './components/LoadingSpinner';
import ForgetPass from './pages/ForgetPass';
import ResetPassword from './pages/ResetPassword';
import MainAi from './pages/MainAi';
import BackgroundShapes from './components/Background';

// ✅ Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to='/signin' replace />;
  if (!user?.isVerified) return <Navigate to='/verify-email' replace />;
  
  return children;
};

// ✅ Redirect already-authenticated users from guest routes
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) return <Navigate to='/create-ideas' replace />;
  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      <Routes>
        {/* 🏠 Home page for guests */}
        <Route path='/' element={
          <RedirectAuthenticatedUser>
            <BackgroundShapes />
            <Home />
          </RedirectAuthenticatedUser>
        } />

        {/* 🤖 AI Page (Authenticated only) */}
        <Route path='/create-ideas' element={
          <ProtectedRoute>
            <MainAi />
          </ProtectedRoute>
        } />

        {/* 🔐 Auth routes */}
        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        } />

        <Route path='/signin' element={
          <RedirectAuthenticatedUser>
            <SignInPage />
          </RedirectAuthenticatedUser>
        } />

        <Route path='/verify-email' element={<EmailVerification />} />
        <Route path='/forget-password' element={
          <RedirectAuthenticatedUser>
            <ForgetPass />
          </RedirectAuthenticatedUser>
        } />
        <Route path='/reset-password' element={
          <RedirectAuthenticatedUser>
            <ResetPassword />
          </RedirectAuthenticatedUser>
        } />

        {/* ❌ 404 Fallback */}
        <Route path='*' element={<div className='text-center w-full mt-10'>🚫 Error 404: Page Not Found</div>} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
