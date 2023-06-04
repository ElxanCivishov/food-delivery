import { useState } from "react";
import { loginBg, logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebaseConfig";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  console.log(user);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignInWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        cred.getIdToken().then((token) => console.log(token));
      });
    });
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative flex">
      {/* background image */}
      <img
        src={loginBg}
        className="w-full h-full absolute object-cover top-0 left-0"
        alt="login image"
      />
      {/* content box */}
      <div className="bg-lightOverlay flex-col items-center w-[80%] md:w-460 h-full z-10  backdrop-blur-sm p-4 px-4 py-12 gap-6">
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={logo} className="w-8" alt="logo" />
          <p className="text-2xl font-semibold text-headingColor"> City</p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <p className="text-2xl font-semibold text-headingColor">
            Welcome back
          </p>
          <p className="text-xl -mt-4 text-gray-900">
            {!isSignUp ? "Sing in" : "Sing up"} with folowing
          </p>
          <LoginInput
            values={user.email}
            setValue={handleChange}
            type="email"
            name="email"
            placeHolder="Email"
            icon={<FaEnvelope className="text-xl text-textColor" />}
            isSignUp={isSignUp}
          />
          <LoginInput
            values={user.password}
            setValue={handleChange}
            type="password"
            name="password"
            placeHolder="Password"
            icon={<FaLock className="text-xl text-textColor" />}
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              values={user.confirmPassword}
              setValue={handleChange}
              type="password"
              name="confirmPassword"
              placeHolder="Confirm password"
              icon={<FaLock className="text-xl text-textColor" />}
              isSignUp={isSignUp}
            />
          )}
          {!isSignUp ? (
            <p className="gap-2  flex">
              Doesn't have an account:
              <motion.button
                {...buttonClick}
                onClick={() => setIsSignUp(true)}
                className="underline cursor-pointer text-red-600 bg-transparent"
              >
                Create one!
              </motion.button>
            </p>
          ) : (
            <p className="gap-2  flex">
              Already have an account:
              <motion.button
                {...buttonClick}
                onClick={() => setIsSignUp(false)}
                className="underline cursor-pointer text-red-600 bg-transparent"
              >
                Sign-in here!
              </motion.button>
            </p>
          )}
          <motion.button
            {...buttonClick}
            className="w-full text-xl px-4 py-2 capitalize cursor-pointer rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors duration-150"
          >
            {!isSignUp ? "Sign in" : "Sign up"}
          </motion.button>
          <div className="flex items-center justify-between gap-8">
            <div className="w-24 bg-white rounded-md  h-[1px]"></div>
            <div className="text-white text-2xl font-semibold">or</div>
            <div className="w-24 bg-white rounded-md h-[1px]"></div>
          </div>

          <motion.div
            {...buttonClick}
            className="flex items-center justify-center  px-14 py-2 bg-white backdrop-blur-md cursor-pointer rounded-3xl gap-4"
            onClick={() => handleSignInWithGoogle()}
          >
            <FcGoogle className="text-3xl" />
            <p className="text-base text-headingColor capitalize">
              Sign in with google
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
