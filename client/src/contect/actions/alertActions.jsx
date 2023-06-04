export const alertSuccess = (message) => {
  return {
    type: "SET_SUCCESS",
    alert: { type: "success", message },
  };
};

export const alertDanger = (message) => {
  return {
    type: "SET_DANGER",
    alert: { type: "danger", message },
  };
};

export const alertWarning = (message) => {
  return {
    type: "SET_WARNING",
    alert: { type: "warning", message },
  };
};

export const alertInfo = (message) => {
  return {
    type: "SET_INFO",
    alert: { type: "info", message },
  };
};

export const alertNull = () => {
  return {
    type: "SET_ALERT_NULL",
    alert: null,
  };
};
