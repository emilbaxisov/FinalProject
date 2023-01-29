import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.scss'
import {Helmet} from 'react-helmet'

const SignupSchema = Yup.object().shape({
  imgUrl: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    job: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    age: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
});

export const Add = () => (
  <div className='add'>
    <Helmet>
      <title>
        Add
      </title>
    </Helmet>
    <h1>Add</h1>
    <Formik
      initialValues={{
        imgUrl: '',
        name: '',
        job: '',
        age: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        axios.post("http://localhost:8000/users",values)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="imgUrl" />
          {errors.imgUrl && touched.imgUrl ? (
            <div>{errors.imgUrl}</div>
          ) : null}
          <Field name="name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <Field name="job" />
          {errors.job && touched.job ? (
            <div>{errors.job}</div>
          ) : null}
          <Field name="age" />
          {errors.age && touched.age ? (
            <div>{errors.age}</div>
          ) : null}
          <div className='tesekkur'><button type="submit">Submit</button><h2>Her sey ucun tesekkurler mellims</h2></div>
          
        </Form>
      )}
    </Formik>

    
  </div>
);

export default Add