import { useState } from "react";

const RegisterWizard = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    role: "candidate",

    // Account Details
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    termsAccepted: false,

    // Candidate Fields
    jobTitle: "",
    currentCompany: "",
    yearsOfExperience: "",
    primarySkills: [],
    secondarySkills: [],
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
    expectedSalary: "",
    noticePeriod: "",
    remoteWork: false,
    relocation: false,
    education: "",
    previousCompanies: "",

    // Interviewer Fields
    companyName: "",
    department: "",
    interviewerJobTitle: "",
    expertiseAreas: [],
    preferredDuration: "60",
    maxPerDay: 3,
    maxPerWeek: 15,

    // Recruiter Fields
    industry: "",
    companyWebsite: "",
    recruiterJobTitle: "",
    recruiterDepartment: "",
    specialization: "",
  });

  const update = (k, v) => setData({ ...data, [k]: v });

  const toggleSkill = (skillArray, skill) => {
    const current = data[skillArray] || [];
    if (current.includes(skill)) {
      update(
        skillArray,
        current.filter((s) => s !== skill),
      );
    } else {
      update(skillArray, [...current, skill]);
    }
  };

  const addCustomSkill = (skillArray, value) => {
    if (value.trim()) {
      update(skillArray, [...(data[skillArray] || []), value.trim()]);
    }
  };

  const removeSkill = (skillArray, skill) => {
    update(
      skillArray,
      data[skillArray].filter((s) => s !== skill),
    );
  };

  const skillOptions = {
    technical: [
      "JavaScript",
      "Python",
      "Java",
      "React",
      "Node.js",
      "SQL",
      "AWS",
      "Docker",
      "TypeScript",
      "MongoDB",
    ],
    expertise: [
      "Frontend",
      "Backend",
      "Full Stack",
      "System Design",
      "DSA",
      "Databases",
      "DevOps",
      "Mobile",
      "Security",
      "ML/AI",
    ],
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-4"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Manrope', -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        
        .wizard-container {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 680px;
          width: 100%;
          overflow: hidden;
          animation: slideUp 0.4s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .wizard-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
          color: white;
        }
        
        .wizard-body {
          padding: 40px;
        }
        
        .progress-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
        
        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .progress-dot.active {
          background: white;
          width: 32px;
          border-radius: 6px;
        }
        
        .role-card {
          border: 2px solid #e9ecef;
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          margin-bottom: 16px;
        }
        
        .role-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
        }
        
        .role-card.selected {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }
        
        .role-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .form-label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 14px;
          display: block;
        }
        
        .form-control, .form-select {
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 15px;
          transition: all 0.2s ease;
          width: 100%;
          font-family: 'Manrope', sans-serif;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          outline: none;
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          padding: 14px 32px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }
        
        .btn-secondary {
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 14px 32px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4a5568;
        }
        
        .btn-secondary:hover {
          border-color: #cbd5e0;
          background: #f7fafc;
        }
        
        .btn-success {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          border: none;
          border-radius: 12px;
          padding: 14px 32px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }
        
        .btn-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(72, 187, 120, 0.4);
        }
        
        .button-group {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }
        
        .button-group .btn-primary {
          flex: 1;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        
        .skill-tag {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          color: #667eea;
        }
        
        .skill-tag:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          transform: translateY(-1px);
        }
        
        .skill-tag.selected {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
        }
        
        .selected-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
          padding: 12px;
          background: #f7fafc;
          border-radius: 12px;
          min-height: 48px;
        }
        
        .selected-skill-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }
        
        .remove-skill {
          cursor: pointer;
          font-weight: bold;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        
        .remove-skill:hover {
          opacity: 1;
        }
        
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f7fafc;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 16px;
        }
        
        .checkbox-container:hover {
          background: #edf2f7;
        }
        
        .checkbox-container input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #667eea;
        }
        
        .review-section {
          background: #f7fafc;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
        
        .review-section h6 {
          color: #667eea;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }
        
        .review-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .review-item:last-child {
          border-bottom: none;
        }
        
        .review-label {
          font-weight: 600;
          color: #4a5568;
          font-size: 14px;
        }
        
        .review-value {
          color: #2d3748;
          font-size: 14px;
          text-align: right;
        }
        
        .edit-button {
          background: none;
          border: none;
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          padding: 0;
          text-decoration: underline;
        }
        
        .edit-button:hover {
          color: #764ba2;
        }
        
        .input-hint {
          font-size: 13px;
          color: #718096;
          margin-top: 6px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .wizard-body {
            padding: 24px;
          }
        }
      `}</style>

      <div className="wizard-container">
        <div className="wizard-header">
          <h1
            style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px" }}
          >
            InterviewFlow
          </h1>
          <p style={{ fontSize: "15px", opacity: 0.95, margin: 0 }}>
            {step === 1 && "Choose your role to get started"}
            {step === 2 && "Create your account"}
            {step === 3 && "Complete your profile"}
            {step === 4 && "Review and confirm"}
          </p>

          <div className="progress-dots">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`progress-dot ${step >= i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="wizard-body">
          {/* STEP 1 - ROLE SELECTION */}
          {step === 1 && (
            <div style={{ animation: "slideUp 0.3s ease-out" }}>
              <div
                className={`role-card ${data.role === "candidate" ? "selected" : ""}`}
                onClick={() => update("role", "candidate")}
              >
                <div className="role-icon">👤</div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Candidate
                </h3>
                <p style={{ color: "#718096", fontSize: "14px", margin: 0 }}>
                  Apply for jobs and attend interviews
                </p>
              </div>

              <div
                className={`role-card ${data.role === "interviewer" ? "selected" : ""}`}
                onClick={() => update("role", "interviewer")}
              >
                <div className="role-icon">👨‍💼</div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Interviewer
                </h3>
                <p style={{ color: "#718096", fontSize: "14px", margin: 0 }}>
                  Conduct interviews for your company
                </p>
              </div>

              <div
                className={`role-card ${data.role === "recruiter" ? "selected" : ""}`}
                onClick={() => update("role", "recruiter")}
              >
                <div className="role-icon">🏢</div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  Recruiter
                </h3>
                <p style={{ color: "#718096", fontSize: "14px", margin: 0 }}>
                  Manage job postings and hiring pipeline
                </p>
              </div>

              <div className="button-group">
                <button className="btn-primary" onClick={() => setStep(2)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 - ACCOUNT DETAILS */}
          {step === 2 && (
            <div style={{ animation: "slideUp 0.3s ease-out" }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  className="form-control"
                  placeholder="John Doe"
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    value={data.password}
                    onChange={(e) => update("password", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    value={data.confirmPassword}
                    onChange={(e) => update("confirmPassword", e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Timezone</label>
                <input
                  className="form-control"
                  value={data.timezone}
                  onChange={(e) => update("timezone", e.target.value)}
                />
                <div className="input-hint">
                  Auto-detected, you can change if needed
                </div>
              </div>

              <div
                className="checkbox-container"
                onClick={() => update("termsAccepted", !data.termsAccepted)}
              >
                <input
                  type="checkbox"
                  checked={data.termsAccepted}
                  onChange={(e) => update("termsAccepted", e.target.checked)}
                />
                <label
                  style={{ margin: 0, cursor: "pointer", fontSize: "14px" }}
                >
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <div className="button-group">
                <button className="btn-secondary" onClick={() => setStep(1)}>
                  Back
                </button>
                <button className="btn-primary" onClick={() => setStep(3)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - ROLE-SPECIFIC DETAILS */}
          {step === 3 && (
            <div style={{ animation: "slideUp 0.3s ease-out" }}>
              {/* CANDIDATE FIELDS */}
              {data.role === "candidate" && (
                <>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "24px",
                      color: "#2d3748",
                    }}
                  >
                    Professional Information
                  </h5>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Current Job Title *</label>
                      <input
                        className="form-control"
                        placeholder="Senior Software Engineer"
                        value={data.jobTitle}
                        onChange={(e) => update("jobTitle", e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current Company</label>
                      <input
                        className="form-control"
                        placeholder="Tech Corp"
                        value={data.currentCompany}
                        onChange={(e) =>
                          update("currentCompany", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Years of Experience *</label>
                    <select
                      className="form-select"
                      value={data.yearsOfExperience}
                      onChange={(e) =>
                        update("yearsOfExperience", e.target.value)
                      }
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Skills *</label>
                    <div className="skill-tags">
                      {skillOptions.technical.map((skill) => (
                        <div
                          key={skill}
                          className={`skill-tag ${data.primarySkills.includes(skill) ? "selected" : ""}`}
                          onClick={() => toggleSkill("primarySkills", skill)}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    {data.primarySkills.length > 0 && (
                      <div className="selected-skills">
                        {data.primarySkills.map((skill) => (
                          <div key={skill} className="selected-skill-tag">
                            {skill}
                            <span
                              className="remove-skill"
                              onClick={() =>
                                removeSkill("primarySkills", skill)
                              }
                            >
                              ×
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Secondary Skills</label>
                    <input
                      className="form-control"
                      placeholder="Add skills separated by commas"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addCustomSkill("secondarySkills", e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                    {data.secondarySkills.length > 0 && (
                      <div className="selected-skills">
                        {data.secondarySkills.map((skill) => (
                          <div key={skill} className="selected-skill-tag">
                            {skill}
                            <span
                              className="remove-skill"
                              onClick={() =>
                                removeSkill("secondarySkills", skill)
                              }
                            >
                              ×
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "32px 0 24px",
                      color: "#2d3748",
                    }}
                  >
                    Online Profiles
                  </h5>

                  <div className="form-group">
                    <label className="form-label">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={data.linkedinUrl}
                      onChange={(e) => update("linkedinUrl", e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">GitHub Profile URL</label>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="https://github.com/username"
                        value={data.githubUrl}
                        onChange={(e) => update("githubUrl", e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Portfolio Website</label>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="https://yourportfolio.com"
                        value={data.portfolioUrl}
                        onChange={(e) => update("portfolioUrl", e.target.value)}
                      />
                    </div>
                  </div>

                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "32px 0 24px",
                      color: "#2d3748",
                    }}
                  >
                    Career Preferences
                  </h5>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Expected Salary</label>
                      <input
                        className="form-control"
                        placeholder="$120,000"
                        value={data.expectedSalary}
                        onChange={(e) =>
                          update("expectedSalary", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Notice Period</label>
                      <select
                        className="form-select"
                        value={data.noticePeriod}
                        onChange={(e) => update("noticePeriod", e.target.value)}
                      >
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediate</option>
                        <option value="2weeks">2 weeks</option>
                        <option value="1month">1 month</option>
                        <option value="2months">2 months</option>
                        <option value="3months">3+ months</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="checkbox-container"
                    onClick={() => update("remoteWork", !data.remoteWork)}
                  >
                    <input
                      type="checkbox"
                      checked={data.remoteWork}
                      onChange={(e) => update("remoteWork", e.target.checked)}
                    />
                    <label
                      style={{ margin: 0, cursor: "pointer", fontSize: "14px" }}
                    >
                      Open to Remote Work
                    </label>
                  </div>

                  <div
                    className="checkbox-container"
                    onClick={() => update("relocation", !data.relocation)}
                  >
                    <input
                      type="checkbox"
                      checked={data.relocation}
                      onChange={(e) => update("relocation", e.target.checked)}
                    />
                    <label
                      style={{ margin: 0, cursor: "pointer", fontSize: "14px" }}
                    >
                      Open to Relocation
                    </label>
                  </div>

                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "32px 0 24px",
                      color: "#2d3748",
                    }}
                  >
                    Background Information
                  </h5>

                  <div className="form-group">
                    <label className="form-label">Education Details</label>
                    <textarea
                      className="form-control"
                      placeholder="B.S. Computer Science, Stanford University, 2018"
                      rows="3"
                      value={data.education}
                      onChange={(e) => update("education", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Previous Companies</label>
                    <textarea
                      className="form-control"
                      placeholder="Google, Microsoft, Amazon"
                      rows="2"
                      value={data.previousCompanies}
                      onChange={(e) =>
                        update("previousCompanies", e.target.value)
                      }
                    />
                  </div>
                </>
              )}

              {/* INTERVIEWER FIELDS */}
              {data.role === "interviewer" && (
                <>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "24px",
                      color: "#2d3748",
                    }}
                  >
                    Company Information
                  </h5>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        className="form-control"
                        placeholder="Tech Corp Inc."
                        value={data.companyName}
                        onChange={(e) => update("companyName", e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Department *</label>
                      <input
                        className="form-control"
                        placeholder="Engineering"
                        value={data.department}
                        onChange={(e) => update("department", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Job Title *</label>
                    <input
                      className="form-control"
                      placeholder="Senior Technical Lead"
                      value={data.interviewerJobTitle}
                      onChange={(e) =>
                        update("interviewerJobTitle", e.target.value)
                      }
                    />
                  </div>

                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "32px 0 24px",
                      color: "#2d3748",
                    }}
                  >
                    Interview Expertise
                  </h5>

                  <div className="form-group">
                    <label className="form-label">Expertise Areas *</label>
                    <div className="skill-tags">
                      {skillOptions.expertise.map((area) => (
                        <div
                          key={area}
                          className={`skill-tag ${data.expertiseAreas.includes(area) ? "selected" : ""}`}
                          onClick={() => toggleSkill("expertiseAreas", area)}
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                    {data.expertiseAreas.length > 0 && (
                      <div className="selected-skills">
                        {data.expertiseAreas.map((area) => (
                          <div key={area} className="selected-skill-tag">
                            {area}
                            <span
                              className="remove-skill"
                              onClick={() =>
                                removeSkill("expertiseAreas", area)
                              }
                            >
                              ×
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Preferred Interview Duration
                    </label>
                    <select
                      className="form-select"
                      value={data.preferredDuration}
                      onChange={(e) =>
                        update("preferredDuration", e.target.value)
                      }
                    >
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                      <option value="90">90 minutes</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Max Interviews / Day</label>
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="10"
                        value={data.maxPerDay}
                        onChange={(e) => update("maxPerDay", e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Max Interviews / Week
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="50"
                        value={data.maxPerWeek}
                        onChange={(e) => update("maxPerWeek", e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* RECRUITER FIELDS */}
              {data.role === "recruiter" && (
                <>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "24px",
                      color: "#2d3748",
                    }}
                  >
                    Company Information
                  </h5>

                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input
                      className="form-control"
                      placeholder="Tech Corp Inc."
                      value={data.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Industry *</label>
                      <select
                        className="form-select"
                        value={data.industry}
                        onChange={(e) => update("industry", e.target.value)}
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="education">Education</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company Website</label>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="https://company.com"
                        value={data.companyWebsite}
                        onChange={(e) =>
                          update("companyWebsite", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "32px 0 24px",
                      color: "#2d3748",
                    }}
                  >
                    Recruiter Details
                  </h5>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Job Title *</label>
                      <input
                        className="form-control"
                        placeholder="Senior Recruiter"
                        value={data.recruiterJobTitle}
                        onChange={(e) =>
                          update("recruiterJobTitle", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Department</label>
                      <input
                        className="form-control"
                        placeholder="Human Resources"
                        value={data.recruiterDepartment}
                        onChange={(e) =>
                          update("recruiterDepartment", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Hiring Specialization *
                    </label>
                    <select
                      className="form-select"
                      value={data.specialization}
                      onChange={(e) => update("specialization", e.target.value)}
                    >
                      <option value="">Select specialization</option>
                      <option value="technical">Technical Hiring</option>
                      <option value="engineering">Engineering</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="executive">Executive Search</option>
                      <option value="general">General Hiring</option>
                    </select>
                  </div>
                </>
              )}

              <div className="button-group">
                <button className="btn-secondary" onClick={() => setStep(2)}>
                  Back
                </button>
                <button className="btn-primary" onClick={() => setStep(4)}>
                  Review
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 - REVIEW & SUBMIT */}
          {step === 4 && (
            <div style={{ animation: "slideUp 0.3s ease-out" }}>
              <div className="review-section">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <h6>Account Details</h6>
                  <button className="edit-button" onClick={() => setStep(2)}>
                    Edit
                  </button>
                </div>
                <div className="review-item">
                  <span className="review-label">Name</span>
                  <span className="review-value">{data.name}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Email</span>
                  <span className="review-value">{data.email}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Timezone</span>
                  <span className="review-value">{data.timezone}</span>
                </div>
              </div>

              <div className="review-section">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <h6>{data.role.toUpperCase()} Profile</h6>
                  <button className="edit-button" onClick={() => setStep(3)}>
                    Edit
                  </button>
                </div>

                {data.role === "candidate" && (
                  <>
                    {data.jobTitle && (
                      <div className="review-item">
                        <span className="review-label">Job Title</span>
                        <span className="review-value">{data.jobTitle}</span>
                      </div>
                    )}
                    {data.currentCompany && (
                      <div className="review-item">
                        <span className="review-label">Current Company</span>
                        <span className="review-value">
                          {data.currentCompany}
                        </span>
                      </div>
                    )}
                    {data.yearsOfExperience && (
                      <div className="review-item">
                        <span className="review-label">Experience</span>
                        <span className="review-value">
                          {data.yearsOfExperience} years
                        </span>
                      </div>
                    )}
                    {data.primarySkills.length > 0 && (
                      <div className="review-item">
                        <span className="review-label">Primary Skills</span>
                        <span className="review-value">
                          {data.primarySkills.join(", ")}
                        </span>
                      </div>
                    )}
                    {data.expectedSalary && (
                      <div className="review-item">
                        <span className="review-label">Expected Salary</span>
                        <span className="review-value">
                          {data.expectedSalary}
                        </span>
                      </div>
                    )}
                    {data.noticePeriod && (
                      <div className="review-item">
                        <span className="review-label">Notice Period</span>
                        <span className="review-value">
                          {data.noticePeriod}
                        </span>
                      </div>
                    )}
                    <div className="review-item">
                      <span className="review-label">Remote Work</span>
                      <span className="review-value">
                        {data.remoteWork ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Relocation</span>
                      <span className="review-value">
                        {data.relocation ? "Yes" : "No"}
                      </span>
                    </div>
                  </>
                )}

                {data.role === "interviewer" && (
                  <>
                    {data.companyName && (
                      <div className="review-item">
                        <span className="review-label">Company</span>
                        <span className="review-value">{data.companyName}</span>
                      </div>
                    )}
                    {data.department && (
                      <div className="review-item">
                        <span className="review-label">Department</span>
                        <span className="review-value">{data.department}</span>
                      </div>
                    )}
                    {data.interviewerJobTitle && (
                      <div className="review-item">
                        <span className="review-label">Job Title</span>
                        <span className="review-value">
                          {data.interviewerJobTitle}
                        </span>
                      </div>
                    )}
                    {data.expertiseAreas.length > 0 && (
                      <div className="review-item">
                        <span className="review-label">Expertise</span>
                        <span className="review-value">
                          {data.expertiseAreas.join(", ")}
                        </span>
                      </div>
                    )}
                    <div className="review-item">
                      <span className="review-label">Interview Duration</span>
                      <span className="review-value">
                        {data.preferredDuration} minutes
                      </span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Max per Day</span>
                      <span className="review-value">
                        {data.maxPerDay} interviews
                      </span>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Max per Week</span>
                      <span className="review-value">
                        {data.maxPerWeek} interviews
                      </span>
                    </div>
                  </>
                )}

                {data.role === "recruiter" && (
                  <>
                    {data.companyName && (
                      <div className="review-item">
                        <span className="review-label">Company</span>
                        <span className="review-value">{data.companyName}</span>
                      </div>
                    )}
                    {data.industry && (
                      <div className="review-item">
                        <span className="review-label">Industry</span>
                        <span className="review-value">{data.industry}</span>
                      </div>
                    )}
                    {data.companyWebsite && (
                      <div className="review-item">
                        <span className="review-label">Website</span>
                        <span className="review-value">
                          {data.companyWebsite}
                        </span>
                      </div>
                    )}
                    {data.recruiterJobTitle && (
                      <div className="review-item">
                        <span className="review-label">Job Title</span>
                        <span className="review-value">
                          {data.recruiterJobTitle}
                        </span>
                      </div>
                    )}
                    {data.recruiterDepartment && (
                      <div className="review-item">
                        <span className="review-label">Department</span>
                        <span className="review-value">
                          {data.recruiterDepartment}
                        </span>
                      </div>
                    )}
                    {data.specialization && (
                      <div className="review-item">
                        <span className="review-label">Specialization</span>
                        <span className="review-value">
                          {data.specialization}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="button-group">
                <button className="btn-secondary" onClick={() => setStep(3)}>
                  Back
                </button>
                <button
                  className="btn-success"
                  onClick={() => {
                    console.log("SUBMIT", data);
                    alert(
                      "Account created successfully! Check console for data.",
                    );
                  }}
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterWizard;
