import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./SignupForm.module.css";

export const CustomErrorMessage = (props: any) => {
  console.log("erroes", props);
  return <div className={styles.errorMessage}>{props.children}</div>;
};

export const SignupForm = ({ selectCities }: any) => {
  return (
    <Formik
      initialValues={{ city: "", minTemperature: "", maxTemperature: "" }}
      validationSchema={Yup.object({
        city: Yup.string()
          .max(15, "Must be 15 characters or less")
          .when(["minTemperature", "maxTemperature"], {
            is: val => !!val,
            then: Yup.string().notRequired(),
            otherwise: Yup.string().required()
          }),
        minTemperature: Yup.number(),
        maxTemperature: Yup.number().min(Yup.ref("minTemperature"))
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(selectCities);
          selectCities(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={styles.signUpForm}>
        <label htmlFor="city">City</label>
        <Field className="form-input" name="city" type="text" />
        <ErrorMessage
          component={CustomErrorMessage}
          className={styles.errorMessage}
          name="city"
        />
        <span>
          <b>OR</b>
        </span>
        <label htmlFor="minTemperature">Min temperature</label>
        <Field name="minTemperature" type="number" />
        <ErrorMessage component={CustomErrorMessage} name="minTemperature" />
        <label htmlFor="max">Max temperature</label>
        <Field name="maxTemperature" type="number" />
        <ErrorMessage component={CustomErrorMessage} name="maxTemperature" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
