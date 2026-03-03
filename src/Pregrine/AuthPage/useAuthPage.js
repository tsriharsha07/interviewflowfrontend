import { useState } from "react";
import { postRequest } from "../../api/api.requests";
import toast from "react-hot-toast";
// Adjust the relative path based on where you put the store file!
import { useAuthStore } from "../../store/auth.store";

const useAuthPage = (isLogin, setIsLogin, navigate) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Extract the login action from your Zustand store
  const login = useAuthStore((state) => state.login);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const apiRes = await postRequest("/auth/login", {
          sEmail: formData.email,
          sPassword: formData.password,
        });

        console.log("Login response:", apiRes);

        // --- ZUSTAND INTEGRATION HERE ---
        // Pass the data from your API response into the Zustand login action.
        // Make sure the property names match what your backend actually returns!
        login(
          apiRes.data.user,
          apiRes.data.accessToken,
          apiRes.data.refreshToken,
        );

        toast.success("Successfully logged in!");
        navigate("/");
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match! Please try again.");
          setIsLoading(false);
          return;
        }

        const apiRes = await postRequest("/auth/register", {
          sEmail: formData.email,
          sPassword: formData.password,
          sFullName: formData.fullName,
        });

        console.log("Register response:", apiRes);
        toast.success("Registration successful! Please log in.");

        setIsLogin(true);
        setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
      }
    } catch (error) {
      console.error("Auth error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, isLoading };
};

export default useAuthPage;
