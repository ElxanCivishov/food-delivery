import { motion } from "framer-motion";
import { fadeInOut } from "../animations";
import { FaCheck, BsExclamationTriangleFill } from "../assets/icons";
import { buttonClick } from "../animations";
import { useDispatch } from "react-redux";
import { alertNull } from "../contect/actions/alertActions";
const Alert = ({ type, message }) => {
  const dispatch = useDispatch();

  if (type === "success") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-12 right-12 px-4 py-3 rounded-md backdrop-blur-sm bg-emerald-300 shadow-md flex items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <FaCheck className="text-xl text-emerald-700" />
          <p className="text-xl text-emerald-700">{message}</p>
        </div>
        <motion.button
          {...buttonClick}
          onClick={() => dispatch(alertNull())}
          className="w-4 text-2xl text-white flex items-center -mt-1 cursor-pointer"
        >
          x
        </motion.button>
      </motion.div>
    );
  }
  if (type === "danger") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-12 right-12 px-4 py-3 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <BsExclamationTriangleFill className="text-xl text-red-700" />
          <p className="text-xl text-red-700">{message}</p>
        </div>
        <motion.button
          {...buttonClick}
          onClick={() => dispatch(alertNull())}
          className="w-4 text-2xl text-white flex items-center -mt-1 cursor-pointer"
        >
          x
        </motion.button>
      </motion.div>
    );
  }
  if (type === "warning") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-12 right-12 px-4 py-3 rounded-md backdrop-blur-sm bg-orange-300 shadow-md flex items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <BsExclamationTriangleFill className="text-xl text-orange-700" />
          <p className="text-xl text-orange-700">{message}</p>
        </div>
        <motion.button
          {...buttonClick}
          onClick={() => dispatch(alertNull())}
          className="w-4 text-2xl text-white flex items-center -mt-1 cursor-pointer"
        >
          x
        </motion.button>
      </motion.div>
    );
  }
  if (type === "info") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-12 right-12 px-6 py-4 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <BsExclamationTriangleFill className="text-xl text-blue-700" />
          <p className="text-xl text-blue-700">{message}</p>
        </div>
        <motion.button
          {...buttonClick}
          onClick={() => dispatch(alertNull())}
          className="w-4 text-2xl text-white flex items-center -mt-1 cursor-pointer"
        >
          x
        </motion.button>
      </motion.div>
    );
  }
};

export default Alert;
