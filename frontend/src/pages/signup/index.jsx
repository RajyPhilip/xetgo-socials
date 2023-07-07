import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Signup() {
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Signup Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1687983545598-6c35818acbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="login"
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create Account</h2>
          <input type="text" className={styles.input} placeholder="Username" />
          <input type="email" className={styles.input} placeholder="Email" />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
          />
          <button className={styles.btn}>SignUp</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img
              src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png"
              alt="google icon"
            />
            <span>SignUp with Google</span>
          </button>
          <p className={styles.text}>
            Already Have Account ? <Link to="/login">Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
