import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button } from "components/contributorComponent/ButtonComponent";
import { Typography } from "components/Typography";
import { Input } from "components/contributorComponent/InputComponent";

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
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 30) {
    errors.firstName = "Must be 30 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.country) {
    errors.country = "Required";
  } else if (values.country.length > 30) {
    errors.country = "Must be 30 characters or less";
  }

  if (!values.state) {
    errors.state = "Required";
  } else if (values.state.length > 30) {
    errors.state = "Must be 30 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "weak password";
  }

  return errors;
};

function ContributorForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
      country: "",
      state: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await new Promise((resolve) =>
        setTimeout(
          resolve({ status: 200, error: "Login successful" }),
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

        <Input
          id="country"
          name="country"
          placeholder="Country"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        {formik.errors.country ? (
          <Typography variant="bodySmall">{formik.errors.country}</Typography>
        ) : null}

        <Input
          id="state"
          name="state"
          placeholder="State"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
        {formik.errors.state ? (
          <Typography variant="bodySmall">{formik.errors.state}</Typography>
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

        <Typography variant="bodySmallThree">
          {" "}
          Already have an account?{" "}
          <Link to="/signin" style={{ TextDecoder: "none" }}>
            Sign In
          </Link>
        </Typography>
        <Button>Become A Contributor</Button>
      </form>
    </FormWrapper>
  );
}

export default ContributorForm;
