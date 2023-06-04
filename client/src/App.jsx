import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login, Main } from "./Containers";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebaseConfig";
import { validateUserJWTToken } from "./api";
import { setUserDetails } from "./contect/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { fadeInOut } from "./animations";
import { Alert, MainLoader } from "./components";

function App() {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) =>
            dispatch(setUserDetails(data))
          );
        });
      }
    });
    setInterval(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="w-full h-full fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center"
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
}

export default App;
