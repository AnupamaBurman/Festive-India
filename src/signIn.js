import React, { useState } from 'react';
import './signIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending delay
    setTimeout(() => {
      console.log('Sign in attempt:', formData);
      setSending(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ email: '', password: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setForgotPasswordClicked(true);
  };

  const handleResetEmailChange = (e) => {
    setResetEmail(e.target.value);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending delay for password reset email
    setTimeout(() => {
      console.log('Password reset requested for:', resetEmail);
      setSending(false);
      setResetEmailSent(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setResetEmail('');
        setForgotPasswordClicked(false);
        setResetEmailSent(false);
      }, 3000);
    }, 1500);
  };

  const handleBackToSignIn = (e) => {
    e.preventDefault();
    setForgotPasswordClicked(false);
  };

  return (
    <div className="signin-container">
      {/* Floating geometric shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      
      <div className={`signin-box ${submitted || resetEmailSent ? 'submitted' : ''}`}>
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Welcome Back!</h2>
            <p>You have successfully signed in to your account.</p>
          </div>
        ) : resetEmailSent ? (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2>Email Sent!</h2>
            <p>Check your inbox for password reset instructions.</p>
          </div>
        ) : forgotPasswordClicked ? (
          <>
            <div className="signin-header">
              <h2>Reset Password</h2>
              <p className="tagline">Enter your email to receive reset instructions</p>
            </div>
            
            <form onSubmit={handleResetSubmit} className="signin-form">
              <div className={`form-group ${focused === 'resetEmail' ? 'focused' : ''} ${resetEmail ? 'has-value' : ''}`}>
                <label htmlFor="resetEmail">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Your Email</span>
                </label>
                <input 
                  id="resetEmail"
                  name="resetEmail" 
                  type="email" 
                  value={resetEmail} 
                  onChange={handleResetEmailChange}
                  onFocus={() => handleFocus('resetEmail')}
                  onBlur={handleBlur}
                  required 
                />
                <div className="focus-border"></div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${sending ? 'sending' : ''}`}
                disabled={sending}
              >
                {sending ? (
                  <div className="loader">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                ) : 'Send Reset Link'}
              </button>
              
              <div className="form-links">
                <a href="#" onClick={handleBackToSignIn} className="back-link">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                  Back to Sign In
                </a>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="signin-header">
              <h2>Sign In</h2>
              <p className="tagline">Welcome back!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="signin-form">
              <div className={`form-group ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                <label htmlFor="email">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Your Email</span>
                </label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required 
                />
                <div className="focus-border"></div>
              </div>

              <div className={`form-group ${focused === 'password' ? 'focused' : ''} ${formData.password ? 'has-value' : ''}`}>
                <label htmlFor="password">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Your Password</span>
                </label>
                <input 
                  id="password"
                  name="password" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  required 
                />
                <div className="focus-border"></div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${sending ? 'sending' : ''}`}
                disabled={sending}
              >
                {sending ? (
                  <div className="loader">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                ) : 'Sign In'}
              </button>
              
              <div className="form-links">
                <a href="#" onClick={handleForgotPassword} className="forgot-link">Forgot Password?</a>
                <div className="signup-prompt">
                  Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
                </div>
              </div>
            </form>
            
            <div className="social-signin">
              <p className="social-divider"><span>Or Sign In With</span></p>
              <div className="social-links">
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;