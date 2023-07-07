import { Link } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
function Login({ user, setUser }) {
  const googleAuth = async () => {
    console.log("ttt");
    // window.open(`http://localhost:8080/auth/google/callback`, "_self");

    let url = "http://localhost:8080/auth/google/callback";
    const loginData = await axios.get(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log("logindataa@@", loginData);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1687983827622-47a9950000c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="login"
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <button className={styles.btn}>Log In</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img
              src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png"
              alt="google icon"
            />
            <span>SignIn with Google</span>
          </button>
          <p className={styles.text}>
            New Here ? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
