import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import HeaderInner from "../HeaderInner/HeaderInner";
import map from "../../img/map.png";
import ticket from "../../img/tickets.png";
import "./Login.css";
import google from "../../img/google.png";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

// firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [, setLoggedInUser] = useContext(UserContext);

  const [newUser, setNewUser] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathName: "/home" } };

  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
    success: false,
    error: "",
    img: [map, ticket],
    location: ["Dhaka", "Sylhet"],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // create  user
  const onSubmit = (data) => {
    const newUserInfo = { ...user };
    newUserInfo.name = data.name;
    newUserInfo.email = data.email;
    newUserInfo.password = data.password;
    setUser(newUserInfo);

    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.isLoggedIn = true;
          newUserInfo.error = false;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(res);
        })
        .catch((err) => {
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = err.message;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(err.message);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          newUserInfo.success = true;
          newUserInfo.isLoggedIn = true;
          newUserInfo.error = false;
          newUserInfo.name = user.name;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((err) => {
          newUserInfo.success = false;
          newUserInfo.error = err.message;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(err.message);
        });
    }
    console.log(data);
  };

  // google signin
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInUser = {
          name: displayName,
          email,
          isLoggedIn: true,
          img: [map, ticket],
          location: ["Dhaka", "Sylhet"],
        };
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="submit-form">
      <HeaderInner />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="form-wrapper">
              <h1>{newUser ? "Create an Account" : "Login"}</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {newUser && (
                  <input
                    className="input-field"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                  />
                )}
                {errors.name && <span className="error">Name is required</span>}
                <input
                  className="input-field"
                  placeholder="Email"
                  {...register("email", {
                    pattern: /\S+@\S+\.\S+/,
                    required: true,
                  })}
                />
                {errors.email && <span className="error">Invalid email</span>}
                <input
                  className="input-field"
                  placeholder="Password"
                  {...register("password", {
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="error">Invalid password</span>
                )}
                {newUser && (
                  <input
                    className="input-field"
                    placeholder="Confirm Password"
                    {...register("password2", {
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      required: true,
                    })}
                  />
                )}
                {errors.password2 && (
                  <span className="error">Password does not match!</span>
                )}
                <div className="check-box d-flex justify-content-between">
                  <div className="check-check">
                    <input
                      type="checkbox"
                      name="remember"
                      {...register("checkbox")}
                    />
                    <label className="check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                  <div className="check-text">
                    <p>Forgot Password?</p>
                  </div>
                </div>
                <input className="submit-button" type="submit" />
              </form>
              <p className="bottom-para">
                {newUser
                  ? "Already have an account?"
                  : "Don't have an Account?"}{" "}
                <span onClick={() => setNewUser(!newUser)} className="signup">
                  {newUser ? "Login" : "Create an Account"}
                </span>
              </p>
            </div>
            <p className="alternative">Or</p>
            <p className="google-icon d-flex align-items-center">
              <img src={google} alt="" />
              <p onClick={googleSignIn} className="icon-text">
                Continue with google
              </p>
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
