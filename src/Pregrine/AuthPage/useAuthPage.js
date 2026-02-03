import { useState } from "react";

const useAuthPage = (isLogin) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "", // Only for Signup
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData.email, formData.password);
      // Add your login API call here
    } else {
      console.log("Signing up with:", formData);
      // Add your signup API call here
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useAuthPage;
