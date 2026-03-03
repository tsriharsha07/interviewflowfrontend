import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import useAuthPage from "../../Pregrine/AuthPage/useAuthPage";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, isLoading } = useAuthPage(
    isLogin,
    setIsLogin,
    navigate,
  );

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-root">
      {/* ── LEFT: Auth Form ── */}
      <div className="auth-left">
        <div className="auth-inner">
          {/* Heading */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h1 className="auth-heading">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="auth-sub">
              {isLogin
                ? "Enter your credentials to access your project dashboard."
                : "Sign up today to start managing your projects efficiently."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            {!isLogin && (
              <div className="field-group">
                <label className="field-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="auth-input"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required={!isLogin}
                  disabled={isLoading}
                />
              </div>
            )}

            {/* Email */}
            <div className="field-group">
              <label className="field-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="auth-input"
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="field-group">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <input
                className="auth-input"
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="field-group">
                <label className="field-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="auth-input"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  disabled={isLoading}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-signin"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="signup-row">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <a href="#" onClick={toggleAuthMode}>
                  Sign up for free
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a href="#" onClick={toggleAuthMode}>
                  Sign in here
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── RIGHT: Decorative ── */}
      <div className="auth-right">
        <div className="right-inner">
          <div>
            <div className="logo-wrap">
              <div className="logo-icon">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2.25rem" }}
                >
                  dashboard_customize
                </span>
              </div>
              <span className="logo-name">MinimalistPM</span>
            </div>
          </div>
          {/* Mockup card */}
          <div className="mockup-wrap">
            <div className="mockup-glow" />
            <div className="mockup-card">
              <div className="mock-header">
                <div className="mock-dot" />
                <div className="mock-dot" />
                <div className="mock-dot" />
              </div>

              <div className="mock-row active">
                <div className="mock-avatar primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1rem", color: "#13b6ec" }}
                  >
                    check_circle
                  </span>
                </div>
                <div className="mock-lines">
                  <div className="mock-line p1" style={{ width: "75%" }} />
                  <div className="mock-line p2" style={{ width: "50%" }} />
                </div>
              </div>

              <div className="mock-row inactive">
                <div className="mock-avatar gray" />
                <div className="mock-lines">
                  <div className="mock-line g1" style={{ width: "100%" }} />
                  <div className="mock-line g2" style={{ width: "66%" }} />
                </div>
              </div>

              <div className="mock-row inactive">
                <div className="mock-avatar gray" />
                <div className="mock-lines">
                  <div className="mock-line g1" style={{ width: "80%" }} />
                </div>
              </div>

              <div className="mock-avatars">
                <div className="mock-ava mock-ava-1" />
                <div className="mock-ava mock-ava-2" />
                <div className="mock-ava mock-ava-3" />
                <div className="mock-ava mock-ava-4">+5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
