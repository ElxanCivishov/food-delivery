import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";

const LoginInput = ({
  type,
  placeHolder,
  values,
  name,
  setValue,
  isSignUp,
  icon,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-white backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-red-500" : "shadow-none"
      }`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeHolder}
        value={values || ""}
        name={name}
        onChange={(e) => setValue(e)}
        className="w-full h-full bg-transparent text-textColor text-lg font-semibold border-none outline-none "
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
