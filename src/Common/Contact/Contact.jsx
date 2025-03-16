import React from 'react';
import './Contact.scss';
import img from "../../Assets/flogo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const Contact = () => {
  
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required').min(10, 'minimum 10 character is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

 // Form submission handler
 const onSubmit = async (values, { resetForm }) => {
  try {

    alert("Your message is sending, Please wait...")
    document.querySelector('body').style.overflow = 'hidden'
    const { data } = await axios.post('http://localhost:3034/contact', values)
    
    if (data.success) {
      alert(data.message)
     
      resetForm()
    } else {
     
      alert(data.error)
    }

  } catch (error) {
    console.log(error.message)
   
    alert("Something went wrong can't contact")

  } finally {
    document.querySelector('body').style.overflow = 'auto'
    // setLoading(false)
  }

};

  return (
    <div className="contact-container">
      

      <div className="contact-image">

        <h3>Get In Touch </h3>

        <span>Protect your business from cyber threats with Cyber Force. Contact us today for a free consultation and discover how we can secure your digital assets with cutting-edge cybersecurity solutions.</span>
        <img src={img} alt="contact" className="rotate-image" />
      </div>
    
      <div className="form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

            <Form className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" className="field" placeholder="Enter Your name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="field" placeholder="abc@gmail.com" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <Field as="textarea" id="message" name="message" className="field" placeholder="Enter Message here..." />
                <ErrorMessage name="message" component="div" className="error" />
              </div>

              <button type="submit" className="contact-button">Submit</button>
            </Form>

          </Formik>
        </div>
    </div>
  );  
};

export default Contact;
