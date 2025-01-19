import { useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5100/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      alert("Register Successful");
      console.log(data);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5100/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTFlZjcxNTYwOThkNzhlYzgyYjA2OCIsImlhdCI6MTcxNjc0MTQ4MCwiZXhwIjoxNzE2NzQ1MDgwfQ.e4x5rTTywSmAKIZZYVYhrnTlKWVi75XbZaVmULBQY9w",
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      });
      const data = await response.json();
      alert("Login Successful");
      console.log(data);
    } catch (err) {
      console.log("Error occurred", err);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signUp ? "Create your account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signUp ? register : login}>
            {signUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-4 font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {signUp && (
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPass(e.target.value)}
                  className="block w-full  px-4 font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#FC8019] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[rgb(232,122,33)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {signUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
          <div className="mt-10 text-center text-sm text-gray-500">
            {signUp ? (
              <>
                I don't have an account?{" "}
                <span
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  onClick={() => setSignUp(false)}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                I have an account?{" "}
                <span
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  onClick={() => setSignUp(true)}
                >
                  Log In
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
