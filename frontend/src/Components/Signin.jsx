import React, { useState } from "react";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux"; 
import { BiLoaderCircle } from "react-icons/all";
import { Link } from "react-router-dom";
import { SignInUserAction } from "../Redux/actions/UserActions";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [Credentials, setCredentials] = useState({
    password: "",
    email: "",
  });

  const InputHandler = (e) => {
    e.preventDefault();
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleSignInButton = async (e) => {
    e.preventDefault();
    if (Credentials.password === "" || Credentials.email === "") {
      alert("All feilds are required");
      return;
    }
    dispatch(SignInUserAction(Credentials));
  };

  const { token, success, loading, error } = useSelector(
    (state) => state.signInUser
  );

  if (token) {
    Navigate("/");
  }

  return (
    <div className="min-h-screen h-full w-full items-center flex flex-row justify-end bg-slate-300 ">
      <form className="min-h-screen w-[30%] bg-white px-6 py-4 flex flex-col gap-4 items-center justify-center ">
        {error && <Error title={error} Message={error} />}
        <div className=" bg-white px-6 py-4 flex flex-col gap-2 items-center justify-center w-full ">
          <div className="w-[100%] rounded-full bg-white px-8 flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-600 "
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="border border-black focus:outline-none py-2 px-5 rounded-full text-slate-700 font-semibold text-sm "
              onChange={InputHandler}
              required
            />
          </div>
          <div className="w-[100%] rounded-full bg-white px-8 flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-600 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="border border-black focus:outline-none py-2 px-5 rounded-full text-slate-700 font-semibold text-sm "
              onChange={InputHandler}
              required
            />
          </div>

          <button
            className="px-8 border border-black rounded-full py-2 w-[50%] flex justify-center items-center"
            onClick={HandleSignInButton}
          >
            {loading ? (
              <BiLoaderCircle size={28} className="spinner" />
            ) : (
              "Sign In"
            )}
          </button>

          <div>
            <h4 className="text-xs font-semibold text-slate-600">
              don't have an account? SignUp{" "}
              <Link to={"/auth/signup"}>
                <span className="font-bold cursor-pointer ">here</span>
              </Link>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
