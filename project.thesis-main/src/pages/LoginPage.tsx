import { Eye, EyeOff, ArrowLeft } from "lucide-react"; // 👈 import the back arrow icon
import { useState } from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`❌ Login failed: ${errorData.message || "Invalid credentials"}`);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("✅ Login successful!");
      window.location.href = "/";
    } catch (error) {
      alert("❌ Login error. Please try again later.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-900 text-white overflow-hidden relative">
      {/* 🔙 Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 flex items-center gap-2 text-white hover:text-gray-300 transition z-50"
      >
        <ArrowLeft size={24} />
        <span className="hidden sm:inline font-medium">Back</span>
      </button>

      {/* LEFT SIDE - Hero Image */}
      <div className="relative hidden md:flex md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Travel background"
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold tracking-wide mb-4 text-white drop-shadow-xl"
          >
            Wanderer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg max-w-md text-gray-200 leading-relaxed"
          >
            Discover breathtaking destinations, hidden gems, and new adventures
            every day — your next journey starts here.
          </motion.p>
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 relative p-8 md:p-16">
        <div className="absolute top-0 left-0 w-60 h-60 bg-indigo-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md z-10"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Log in to continue exploring the world.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Password Input with Eye Icon */}
            <div className="relative">
              <label className="block text-gray-300 mb-1 text-sm">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 pr-10 border border-gray-700 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-400 hover:underline">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
