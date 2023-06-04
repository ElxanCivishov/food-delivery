import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { isActiveStyled, isNotActiveStyled } from "../utils/styles";
import { motion } from "framer-motion";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { buttonClick, slideTop } from "../animations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { Avatar } from "../assets";
import { app } from "../config/firebaseConfig";
import { setUserNull } from "../contect/actions/UserActions";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
      <NavLink to="/" className="flex items-center justify-center gap-4">
        <img src={logo} className="w-12" alt="" />
        <p className="font-semibold text-xl">City</p>
      </NavLink>
      <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyled : isNotActiveStyled
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyled : isNotActiveStyled
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyled : isNotActiveStyled
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyled : isNotActiveStyled
            }
            to="/contactus"
          >
            Contact us
          </NavLink>
        </ul>

        <motion.div {...buttonClick} className="relative cursor-pointer">
          <MdShoppingCart className="text-3xl text-textColor" />
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center -top-4 -right-1 absolute">
            <p className="text-base text-white font-semibold">2</p>
          </div>
        </motion.div>

        {currentUser ? (
          <div
            className="cursor-pointer relative"
            onMouseEnter={() => setIsMenu(true)}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md flex items-center justify-center">
              <motion.img
                className="w-full object-cover"
                whileHover={{ scale: 1.15 }}
                referrerPolicy="no-referrer"
                src={currentUser?.picture ? currentUser?.picture : Avatar}
              />
            </div>
            {isMenu && (
              <motion.div
                onMouseLeave={() => setIsMenu(false)}
                {...slideTop}
                className="bg-white backdrop-blur-md shadow-md rounded-md absolute top-12 px-6 py-6 gap-4 flex flex-col w-48 right-0"
              >
                <Link
                  to="/dashboard/home"
                  className="text-xl text-textColor hover:text-red-500"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-xl text-textColor hover:text-red-500"
                >
                  Profile
                </Link>
                <Link
                  to="/user-orders"
                  className="text-xl text-textColor hover:text-red-500"
                >
                  Orders
                </Link>
                <hr />
                <motion.div
                  {...buttonClick}
                  onClick={() => handleSignOut()}
                  className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
                >
                  <MdLogout className="text-2xl text-textColor group-hover:text-headingColor" />
                  <p>Sign out</p>
                </motion.div>
              </motion.div>
            )}
          </div>
        ) : (
          <NavLink to="/login">
            <motion.button
              {...buttonClick}
              className="px-4 text-xl py-2 shadow-md border border-red-300 bg-transparent rounded-md hover:bg-red-300 hover:text-white cursor-pointer"
            >
              Login
            </motion.button>
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
