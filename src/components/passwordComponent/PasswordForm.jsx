import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button } from "components/signUpComponent/ButtonComponent";
import { Typography } from "components/Typography";
import { Input } from "components/signUpComponent/InputComponent";

const FormWrapper = styled.div`
  margin-top: 10px;
  max-width: 500px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function PasswordForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await new Promise((resolve) =>
        setTimeout(
          resolve({ status: 200, error: "something went wrong" }),
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
          id="email"
          name="email"
          placeholder="Email Address"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <Typography variant="bodySmall">{formik.errors.email}</Typography>
        ) : null}

        <Typography variant="bodySmallThree">
          {" "}
          Already have an account?{" "}
          <Link to="/signin" style={{ TextDecoder: "none" }}>
            Back to Sign In
          </Link>
        </Typography>
        <Button>Proceed</Button>
      </form>
    </FormWrapper>
  );
}

export default PasswordForm;
