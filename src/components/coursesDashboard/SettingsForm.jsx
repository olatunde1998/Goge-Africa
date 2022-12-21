import styled from "styled-components";
import { Typography } from "components/Typography";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "components/passwordComponent/InputComponent";
import { Button } from "components/passwordComponent/ButtonComponent";

const ButtonWrapper = styled.div`
  max-width: 250px;
  margin: 50px auto;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
const SettingsForm = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 30) {
    errors.firstName = "Must be 30 characters or less";
  }
  if (!values.country) {
    errors.country = "Required";
  } else if (values.country.length < 5) {
    errors.country = "set your country";
  }
  if (!values.streetAddress) {
    errors.streetAddress = "Required";
  } else if (values.streetAddress.length < 5) {
    errors.streetAddress = "set your street Address";
  }
  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length < 5) {
    errors.city = "set your city";
  }
  if (!values.state) {
    errors.state = "Required";
  } else if (values.state.length < 5) {
    errors.state = "set your state";
  }
  if (!values.postalCode) {
    errors.postalCode = "Required";
  } else if (values.postalCode.length < 5) {
    errors.postalCode = "set your postalCode";
  }
  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length < 5) {
    errors.mobile = "type your mobile";
  }
  return errors;
};

function SettingForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode:"",
      mobile: "",
    },
    validate,
    onSubmit: async (values) => {
      const res = await new Promise((resolve) =>
        setTimeout(resolve({ status: 200, error: "login successful" }), 5000)
      );
      if (res.status === 200) {
        // alert(JSON.stringify(values, null, 2))
        navigate("/orders");
      }
      alert(res.error);
    },
  });

  return (
    <SettingsForm>
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
          id="country"
          name="country"
          placeholder="Country/Region"
          type="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        {formik.errors.country ? (
          <Typography variant="bodySmall">{formik.errors.country}</Typography>
        ) : null}

        <Input
          id="streetAddress"
          name="streetAddress"
          placeholder="Street Address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.streetAddress}
        />
        {formik.errors.streetAddress ? (
          <Typography variant="bodySmall">
            {formik.errors.streetAddress}
          </Typography>
        ) : null}

        <Input
          id="city"
          name="city"
          placeholder="City"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        {formik.errors.city ? (
          <Typography variant="bodySmall">{formik.errors.city}</Typography>
        ) : null}

        <Input
          id="state"
          name="state"
          placeholder="State/Province/Region"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
        {formik.errors.state ? (
          <Typography variant="bodySmall">{formik.errors.state}</Typography>
        ) : null}

        <Input
          id="postalCode"
          name="postalCode"
          placeholder="Zip/Postal Code"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
        />
        {formik.errors.postalCode ? (
          <Typography variant="bodySmall">
            {formik.errors.postalCode}
          </Typography>
        ) : null}

        <Input
          id="mobile"
          name="mobile"
          placeholder="Mobile"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        {formik.errors.mobile ? (
          <Typography variant="bodySmall">{formik.errors.mobile}</Typography>
        ) : null}

        <ButtonWrapper>
          <Button>Save and Ship to this Address</Button>
        </ButtonWrapper>
      </form>
    </SettingsForm>
  );
}

export default SettingForm;
