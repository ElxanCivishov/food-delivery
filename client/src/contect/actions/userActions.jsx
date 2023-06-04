export const setUserDetails = (user) => {
  return {
    type: "SET_USER",
    user,
  };
};

export const getUserData = () => {
  return {
    type: "GET_USER",
  };
};

export const setUserNull = () => {
  return {
    type: "SET_USER_NULL",
    user: null,
  };
};
