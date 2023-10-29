import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useState } from "react";

import CustomAlert from "./CustomAlert";

function NewsletterSignup() {
  const fethcer = useFetcher();
  const { data, state } = fethcer;

  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); 

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      setAlertMessage(data.message);
      setShowAlert(true);
    }
  }, [data, state]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setAlertMessage("Email cannot be empty.");
      setShowAlert(true);
    } else {
      //... Send the email to the backend
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className={classes.newsletterSignup}>
      {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}
      <form
        method="post"
        action="/newsletter"
        className={classes.newsletter}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
          value={email}
          onChange={handleEmailChange}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
