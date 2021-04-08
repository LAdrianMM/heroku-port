import React, { useState } from "react";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import {
  Paper,
  makeStyles,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { useFormik } from "formik";
import MuiAlert from "@material-ui/lab/Alert";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;

function Contact(props) {
  const openRepoinNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };
  const classes = useStyles();
  const theme = props.theme;
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "- required";
    }

    if (!values.email) {
      errors.email = "- required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "- invalid email address";
    }

    if (!values.subject) {
      errors.subject = "- required";
    }

    if (!values.message) {
      errors.message = "- required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setSending(true);
      fetch("/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          setSuccess(true);
          setSending(false);
          return response.json();
        })
        .catch((err) => {
          setError(true);
          setSending(false);
          console.log(err);
        });

      resetForm({});
    },
  });

  const styles = style({
    backgroundColor: `${theme.accentColor}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
  });
  const handleClick = () => {
    formik.handleSubmit();
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <div className={classes.formWrapper}>
                <Paper
                  className={classes.formInfo}
                  variant="outlined"
                  elevation={3}
                >
                  <div>
                    <h2>Address</h2>
                    <h3>{ContactData["address"]}</h3>
                  </div>
                  <div>
                    <h2>Phone</h2>
                    <h3>{ContactData["phone"]}</h3>
                  </div>
                  <div>
                    <h2>Email</h2>
                    <h3>{ContactData["email"]}</h3>
                  </div>
                </Paper>
                <Paper
                  className={classes.formInput}
                  variant="outlined"
                  elevation={3}
                >
                  <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <TextField
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name || ""}
                      type="text"
                      className={classes.inputName}
                      label={`Name * ${
                        formik.touched.name && formik.errors.name
                          ? formik.errors.name
                          : ""
                      }`}
                      variant="filled"
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.name && formik.errors.name ? true : false
                      }
                    />
                    <TextField
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="email"
                      className={classes.inputEmail}
                      label={`Email * ${
                        formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : ""
                      }`}
                      variant="filled"
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && formik.errors.email
                          ? true
                          : false
                      }
                    />
                    <TextField
                      id="subject"
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      type="text"
                      className={classes.inputSubject}
                      label={`Subject * ${
                        formik.touched.subject && formik.errors.subject
                          ? formik.errors.subject
                          : ""
                      }`}
                      variant="filled"
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.subject && formik.errors.subject
                          ? true
                          : false
                      }
                    />
                    <TextField
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      className={classes.inputMessage}
                      label={`Your Messagge Here... * ${
                        formik.touched.message && formik.errors.message
                          ? formik.errors.message
                          : ""
                      }`}
                      multiline
                      rows={6}
                      variant="filled"
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.message && formik.errors.message
                          ? true
                          : false
                      }
                    />
                    <div className={classes.buttonWrapper}>
                      <Button
                        // disabled={sending}
                        typy="submit"
                        {...styles}
                        className={classes.formButton}
                        onClick={() => handleClick()}
                      >
                        {sending ? "Sending ..." : "Send Messagge"}
                      </Button>
                      {sending && (
                        <CircularProgress
                          size={30}
                          className={classes.progress}
                        />
                      )}
                    </div>
                  </form>
                </Paper>
              </div>
              <SocialMedia />
              <br />
              <br />
              <button
                onClick={() => openRepoinNewTab(greeting.resumeLink)}
                {...styles}
                className="general-btn"
              >
                See my Resume
              </button>
            </div>
          </div>
        </Fade>
      </div>
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success">Yeah!, your messagge has been sent!!</Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={4000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error">Ups!, An error has ocurred.</Alert>
      </Snackbar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      width: "700px",
    },
  },
  buttonWrapper: {
    gridColumn: "1 / 3",
    height: "50px",
    marginTop: theme.spacing(5),
    position: "relative",
  },
  formButton: {
    backgroundColor: "hsl(214, 96%, 70%)",
    height: "100%",
    outline: "none",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "capitalize",
    width: "100%",

    "&:hover": {
      backgroundColor: "hsl(214, 96%, 70%)",
    },
    "&:focus": {
      backgroundColor: "hsl(214, 96%, 70%)",
    },
    "&:active": {
      backgroundColor: "hsl(214, 96%, 70%)",
    },
  },
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-17px",
    marginLeft: "60px",
    color: "red",

    "& svg": {
      backgroundColor: "hsl(214, 96%, 70%)",

      "&:focus": {
        backgroundColor: "hsl(214, 96%, 70%)",
      },
      "&:hover": {
        backgroundColor: "hsl(214, 96%, 70%)",
      },
    },
  },
  formWrapper: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  formInfo: {
    minHeight: "400px",
    width: "100%",
    borderRadius: "20px",
    marginRight: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: theme.spacing(2),

    "&:hover": {
      backgroundColor: "hsl(214, 100%, 90%)",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  formInput: {
    borderRadius: "20px",
    backgroundColor: "transparent",
    width: "100%",

    "& div": {
      backgroundColor: "#fff",
      borderRadius: "10px",

      "&:hover": {
        backgroundColor: "hsl(214, 100%, 90%)",
      },
    },
  },
  inputEmail: {
    gridColumn: "1 /3",

    [theme.breakpoints.up("sm")]: {
      gridColumn: "2 / 3",
    },
  },
  inputName: {
    gridColumn: "1 /3",

    [theme.breakpoints.up("sm")]: {
      gridColumn: "1 / 2",
    },
  },
  inputMessage: {
    gridColumn: "1 / 3",
  },
  inputSubject: {
    gridColumn: "1 / 3",
  },
}));

export default Contact;
