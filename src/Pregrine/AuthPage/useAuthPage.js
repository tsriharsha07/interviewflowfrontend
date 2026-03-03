import { useState } from "react";
import { postRequest } from "../../api/api.requests";

const useAuthPage = (isLogin) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const apiRes = await postRequest("/auth/login", {
        sEmail: formData.email,
        sPassword: formData.password,
      });
      console.log("Login response:", apiRes);
      // Add your login logic here (e.g., save token, redirect)
    } else {
      // Basic validation for sign-up
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return; // Stop submission
      }

      const apiRes = await postRequest("/auth/register", {
        sEmail: formData.email,
        sPassword: formData.password,
        sFullName: formData.fullName,
      });
      console.log("apirRes Login", apiRes);
      // Add your signup API call here
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useAuthPage;
