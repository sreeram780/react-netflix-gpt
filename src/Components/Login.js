import Header from "./Header";
import { BACKGROUND_IMG_URL } from "../utils/constant";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const toggleSignInForm = () => {
    setIsSign(!isSignIn);
  };

  return (
    <div className="text-center">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG_URL} alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto mt-36 right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-left p-2 m-2 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Email"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 my-4 text-left cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
