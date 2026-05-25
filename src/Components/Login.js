import Header from "./Header";
import { BACKGROUND_IMG_URL } from "../utils/constant";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSign(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleButtonClick = () => {
    // validate the form Data
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
    );
    setErrorMessage(message);
    // Sign In / Sign up
  };

  return (
    <div className="text-center">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black mx-auto mt-36 right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-left p-2 m-2 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
