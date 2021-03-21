import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import "./Login.css";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleFacebookSignIn = () => {
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbprovider)
      .then((result) => {
        var user = result.user;
        console.log(user);
        setLoggedIn(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user);
        setLoggedIn(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleChange = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      const isEmail = /\S+@\S+\.\S+/.test(event.target.value);
      isFormValid = isEmail;
    }
    if (event.target.name === "password") {
      const isPassword = event.target.value.length > 6;
      const hasDigit = /\d{1}/.test(event.target.value);
      isFormValid = isPassword && hasDigit;
    }
    if (event.target.name === "confirmPassword") {
      const isPassword = event.target.value.length > 6;
      const hasDigit = /\d{1}/.test(event.target.value);
      isFormValid = isPassword && hasDigit;
    }
    if (isFormValid) {
      const newUser = { ...user };
      newUser[event.target.name] = event.target.value;
      setUser(newUser);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password && user.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          setLoggedIn(user);
          history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
        });
    }
    e.preventDefault();
  };

  return (
    <div className="form-layout" style={{}}>
      {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        {newUser && (
          <TextField
            onBlur={handleChange}
            required
            id="standard-required"
            label="Your Name"
            name=""
          />
        )}
        <br />
        <TextField
          onBlur={handleChange}
          id="standard-required"
          label="Your Email"
          name="email"
        />
        <br />
        <TextField
          onBlur={handleChange}
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
        />
        <br />
        {newUser && (
          <TextField
            onBlur={handleChange}
            id="standard-required"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
          />
        )}
        <br />
        <input
          color="secondary"
          type="submit"
          value={newUser ? "Submit" : "Login"}
        />

        <button
          style={{ margin: "10px", border: "1px solid black" }}
          name="newUser"
          onClick={() => setNewUser(!newUser)}
        >
          SignUp
        </button>
        <br />
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p stylr={{ color: "green" }}>
            Account {newUser ? "created" : "Logged In"}Succesfully
          </p>
        )}
      </form>
      <br />
      <button onClick={handleGoogleSignIn}>Google</button>
      <button style={{ margin: "10px" }} onClick={handleFacebookSignIn}>
        Facebook
      </button>
    </div>
  );
};

export default Login;
