import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SignupForm = ({ selectCities }: any) => {
  return (
    <Formik
      initialValues={{ city: "", minTemperature: "", maxTemperature: "" }}
      validationSchema={Yup.object({
        city: Yup.string().max(15, "Must be 15 characters or less"),
        min: Yup.number(),
        max: Yup.number()
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(selectCities);
          selectCities(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="city">City</label>
        <Field name="city" type="text" />
        <ErrorMessage name="city" />
        <label htmlFor="minTemperature">Min temperature</label>
        <Field name="minTemperature" type="text" />
        <ErrorMessage name="minTemperature" />
        <label htmlFor="max">Max temperature</label>
        <Field name="maxTemperature" type="maxTemperature" />
        <ErrorMessage name="maxTemperature" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
