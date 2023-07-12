import { UserAuth } from "../../context/authContext";
import styles from "./style.module.css";

function Home() {
  const { user1, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log("error logging out", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        I m HomePage {user1 && user1.displayName}
      </h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="profile" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <img
            className={styles.profile_img}
            src={"userDetails.photos[0]"}
            alt="profile"
          />

          <input
            type="text"
            defaultValue={"user.name"}
            className={styles.input}
            placeholder="Username"
          />
          <input
            type="email"
            defaultValue={"user.email"}
            className={styles.input}
            placeholder="Email"
          />
          <button onClick={handleSignOut} className={styles.btn}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
