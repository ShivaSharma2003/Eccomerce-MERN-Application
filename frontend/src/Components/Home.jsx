import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [Account, setAccount] = useState();

  useEffect(() => {
    if (!Account) {
      navigate("/auth/signup");
    }
  }, []);

  return <div>This is Home</div>;
};

export default Home;
