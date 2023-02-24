import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterUserAction } from "../Redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { BiLoaderCircle } from "react-icons/all";
import Success from "../Components/Success";
import Error from "./Error";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [confirmPassword, setconfirmPassword] = useState("");

  const InputHandler = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const confirminputhandler = (e) => {
    setconfirmPassword(e.target.value);
  };

  const HandleSignupButton = async (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.email === ""
    ) {
      alert("All feilds are required");
      return;
    }
    dispatch(RegisterUserAction(formData));
  };

  const { loading, registeredUser, success, error } = useSelector(
    (state) => state.registeredUser
  );
  
  return (
    <div className="min-h-screen h-full w-full items-center flex flex-row justify-end bg-slate-300 ">
      <form className="min-h-screen w-[30%] bg-white px-6 py-4 flex flex-col gap-4 items-center justify-center ">
        {success && (
          <Success
            title={"SuccessFully SignedUp"}
            Message={
              "You've Successfully signedUp Your Account Continue with Signin"
            }
          />
        )}
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
          <div className="w-[100%] rounded-full bg-white px-8 flex flex-col gap-1">
            <label
              htmlFor="confirm_password"
              className="text-sm font-semibold text-slate-600 "
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              placeholder="confirm password"
              className="border border-black focus:outline-none py-2 px-5 rounded-full text-slate-700 font-semibold text-sm "
              onChange={confirminputhandler}
              required
            />
          </div>
          {formData.password !== confirmPassword ? (
            <h4 className="text-red-700 text-xs font-bold text-left">
              Password not matched
            </h4>
          ) : null}
          <div className="w-[100%] rounded-full bg-white px-8 flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-slate-600 "
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="border border-black focus:outline-none py-2 px-5 rounded-full text-slate-700 font-semibold text-sm "
              onChange={InputHandler}
              required
            />
          </div>
          <button
            className="px-8 border border-black rounded-full py-2 w-[50%] flex justify-center items-center"
            onClick={HandleSignupButton}
            disabled={formData.password !== confirmPassword}
          >
            {loading ? (
              <BiLoaderCircle size={28} className="spinner" />
            ) : (
              "Signup"
            )}
          </button>

          <div>
            <h4 className="text-xs font-semibold text-slate-600">
              already a customer signin{" "}
              <Link to={"/auth/signin"}>
                <span className="font-bold cursor-pointer ">here</span>
              </Link>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
