import React from "react";
import { useSelector } from "react-redux";
import { authDataSelector } from "../../selectors/selectors";
import { Navigate } from "react-router-dom";

const Home = () => {
  const auth = useSelector(authDataSelector);
  if (auth === true) {
    return <div>Hello</div>;
  } else {
    return <Navigate to="/singIn" />;
  }
};
export default Home;
