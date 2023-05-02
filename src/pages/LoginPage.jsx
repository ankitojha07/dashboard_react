import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { app } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "google",
        name: user.name,
        email: user.email,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const LoginPage = () => {
  let navigate = useNavigate();
  const routeChange = async () => {
    await signInWithGoogle();
    let path = "home";
    navigate(path);
  };

  const signIn = () => {
    let path = "home";
    navigate(path);
  };

  return (
    <>
      <div className=" bg-gray flex md:flex-row h-screen items-center flex-col max-md:justify-evenly">
        <div className="md:w-9/12 md:bg-black text-white max-md:text-white max-md:px-10 max-md:py-12 flex justify-center items-center max-md:bg-black max-md:rounded-2xl  max-md:w-9/12">
          <h1 className="text-4xl flex font-bold md:h-screen items-center max-md:items-start ">
            Board.
          </h1>
        </div>
        <div className=" bg-gray text-center flex justify-center items-center w-full">
          <div className="flex flex-col items-start max-md:w-9/12 ">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <h4 className="font-lato mt-1 font-regular tracking-wide text-sm">
              Sign in to your account
            </h4>
            <div className="auth-btn flex md:flex-row justify-center mt-4 w-full flex-col">
              <button
                className="text-xs  bg-white text-gray-400 rounded-md px-4 py-1 mt-3 h-10 flex flex-row items-center  "
                onClick={routeChange}
              >
                <FcGoogle className="mr-2" /> Sign in with Google
              </button>
              <button className="text-xs  bg-white text-gray-400 rounded-md px-4 py-1 md:ml-5 mt-3 flex flex-row items-center h-10">
                <AiFillApple className="mr-2" /> Sign in with Apple
              </button>
            </div>
            <form
              name="myform"
              className="form w-full rounded-xl flex flex-col justify-start items-start mt-4 bg-white p-4"
            >
              <label className="font-lato text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray rounded-lg mt-1 w-full p-2"
              />
              <label className="font-lato text-sm font-medium mt-3">
                Password
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                className="bg-formCol rounded-lg mt-1 w-full p-2"
              />
              <h6 className="font-lato text-sm font-medium mt-3 text-blue cursor-pointer">
                Forgot password?
              </h6>

              <button
                className="py-2 bg-black text-white w-full mt-3 rounded-lg"
                onClick={signIn}
              >
                Sign In
              </button>
            </form>
            <div className="flex flex-row justify-center w-full mt-2">
              <h6 className="font-lato font-medium text-sm text-gray-500">
                Don't have an account?
              </h6>
              <h6 className="font-lato text-center ml-2 text-blue font-medium text-sm">
                Sign In
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
