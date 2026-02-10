import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import loginLeft from "../../assets/loginLeft.png";
import useAuthPage from "../../Pregrine/AuthPage/useAuthPage";
import RegisterWizard from "../RegisterPage/RegisterPage";
// import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { formData, handleChange, handleSubmit } = useAuthPage(isLogin);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <>
      {isLogin ? (
        <Container
          fluid
          className="auth-container vh-100 d-flex align-items-center"
        >
          <Row className="w-100 justify-content-center g-0">
            {/* LEFT ILLUSTRATION */}
            <Col
              md={6}
              lg={6}
              className="d-none d-md-flex align-items-center justify-content-center left-panel"
            >
              <div className="text-center illustration-wrapper">
                <div className="image-container">
                  <img
                    src={loginLeft}
                    alt="InterviewFlow users"
                    className="img-fluid illustration-img"
                  />
                  <h3 className="fw-bold mt-4 mb-2">Join 50k+ professionals</h3>
                  <p className="subtitle-text">
                    Candidates & interviewers scheduling interviews seamlessly
                  </p>
                </div>
                <div className="stats-badges mt-4">
                  <span className="stat-badge">50k+ Users</span>
                  <span className="stat-badge">4.9/5 Rating</span>
                </div>
              </div>
            </Col>

            {/* RIGHT AUTH CARD */}
            <Col
              md={6}
              lg={5}
              xl={4}
              className="d-flex align-items-center justify-content-center right-panel"
            >
              <div className="auth-card-wrapper w-100">
                <Card className="auth-card border-0">
                  <Card.Body className="p-5">
                    {/* Header */}
                    <div className="auth-header mb-4">
                      <h2 className="fw-bold mb-2">
                        {isLogin
                          ? "Nice to see you 👋"
                          : "Create an account ✨"}
                      </h2>
                      <p className="text-muted mb-4">
                        {isLogin
                          ? "Login to continue to InterviewFlow"
                          : "Register to start scheduling interviews"}
                      </p>
                    </div>

                    <Form onSubmit={handleSubmit} className="auth-form">
                      {/* FULL NAME - Only shows on Signup */}
                      <div
                        className={`form-group-animated ${!isLogin ? "show" : ""}`}
                      >
                        {!isLogin && (
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label-custom">
                              Full Name
                            </Form.Label>
                            <Form.Control
                              name="fullName"
                              type="text"
                              placeholder="John Doe"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="form-input-custom"
                              required
                            />
                          </Form.Group>
                        )}
                      </div>

                      {/* EMAIL */}
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label-custom">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input-custom"
                          required
                        />
                      </Form.Group>

                      {/* PASSWORD */}
                      <Form.Group className="mb-4">
                        <Form.Label className="form-label-custom">
                          Password
                        </Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          className="form-input-custom"
                          required
                        />
                      </Form.Group>

                      {/* Remember Me & Forgot Password */}
                      {isLogin && (
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <Form.Check
                            label="Remember me"
                            className="custom-checkbox"
                          />
                          <a
                            href="#"
                            className="forgot-link text-decoration-none small"
                          >
                            Forgot password?
                          </a>
                        </div>
                      )}

                      {/* Submit Button */}
                      <Button
                        variant="primary"
                        type="submit"
                        className="submit-btn w-100 py-3 mb-3"
                      >
                        {isLogin ? "Sign in" : "Create Account"}
                      </Button>

                      {/* Divider */}

                      {/* Toggle Auth Mode */}
                      <p className="text-center mt-4 toggle-text">
                        {isLogin
                          ? "Don't have an account?"
                          : "Already have an account?"}{" "}
                        <a
                          href="#"
                          className="toggle-link"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleAuthMode();
                          }}
                        >
                          {isLogin ? "Sign up" : "Log in"}
                        </a>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>

                {/* Terms & Privacy */}
                <p className="text-center footer-text mt-3">
                  By continuing, you agree to our{" "}
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <RegisterWizard />
      )}
    </>
  );
};

export default AuthPage;
