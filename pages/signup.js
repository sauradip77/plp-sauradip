import { useState } from "react";
import { saveUser, setSession } from "../utils/auth";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser({ email, password });
    setSession({ email });
    router.push("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="border p-2" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}