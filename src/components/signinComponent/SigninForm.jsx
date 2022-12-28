import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button } from "components/signinComponent/ButtonComponent";
import { Typography } from "components/Typography";
import { Input } from "components/signinComponent/InputComponent";

const FormWrapper = styled.div`
  margin-top: 10px;
  max-width: 300px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media(min-width: 768px){
    max-width: 500px;
  }
`;
const TypoWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 30) {
    errors.firstName = "Must be 30 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "weak password";
  }

  return errors;
};

function SigninForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await new Promise((resolve) =>
        setTimeout(
          resolve({ status: 200, error: "login successful" }),
          5000
        )
      );
      if (res.status === 200) {
        // alert(JSON.stringify(values, null, 2))
        navigate("/home");
      }
      alert(res.error);
    },
  });

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Full Name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? (
          <Typography variant="bodySmall">{formik.errors.firstName}</Typography>
        ) : null}

        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <Typography variant="bodySmall">{formik.errors.password}</Typography>
        ) : null}

        <TypoWrapper>
          <Typography variant="bodySmallThree">
          {" "}
          Don't have an account?{" "}
          <Link to="/signUp" style={{ TextDecoder: "none" }}>
            Sign Up
          </Link>
        </Typography></TypoWrapper>
        <Button>Sign In</Button>
      </form>
    </FormWrapper>
  );
}

export default SigninForm;
