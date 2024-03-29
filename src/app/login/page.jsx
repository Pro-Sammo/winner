"use client";
import {setCookie} from 'cookies-next'
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "@winner") {
        setCookie("isAdmin",true)
      router.push("/admin");
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <input
        className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter admin password"
      />
      <button
        className="px-6 py-2 bg-blue-400 rounded text-white font-bold"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
