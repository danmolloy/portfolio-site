'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import axios from "axios";

export default function Section() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="text-2xl">Message failed to send.</h2> <p>Please try again or <a href='mailto:danielmolloy_6@icloud.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><h2 className="text-2xl">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><h2 className="text-2xl">Message sending...</h2></div>)

  return (
    <section className="flex flex-col w-screen justify-between ">
      <h1 className='self-center'>Contact</h1>
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        .required('message required')
    })}
    onSubmit={async (values, actions ) => {
      setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/api", values)
      .then((res) => {
        console.log('Response received')
        if (res.status === 201) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          actions.setSubmitting(false)
          setSendStatus("err")
        }
        }).catch(e => {
          actions.setSubmitting(false)
          setSendStatus("err")
        })
      }}> 
      {(props) => (
      <Form data-testid="contact-form" className="z-10  flex flex-col w-[95vw] self-center lg:w-1/2 ">

          <div className="flex flex-col m-2">
          <label htmlFor='name-input' className="form-label dark:text-zinc-400">Name</label>
          <Field 
            id="name-input" 
            className=" text-black border border-zinc-400 rounded-md w-full p-1 dark:bg-zinc-300"
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2">
          <label htmlFor='email' className="form-label dark:text-zinc-400">Email</label>
          <Field
            id="email" 
            className="text-black border border-zinc-400 rounded-md w-full p-1 dark:bg-zinc-300" 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2 mb-0">
          <label htmlFor='msg-text' className="form-label dark:text-zinc-400">Message</label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-black border border-zinc-400 rounded-md w-full p-1 dark:bg-zinc-300"
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button disabled={props.isSubmitting || (sendStatus === "sending")} id="submit-button" type='submit' className=" disabled:opacity-30 hover:bg-gray-50 shadow-sm   border border-zinc-400 m-2 p-1 w-24 rounded self-end  ">Submit</button>
        <div>
        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div>
      </Form> )}
    </Formik>
     <Image className="hidden dark:block -mb-2" src={'/ibis-dark.png'} height={600/2} width={600/2} alt="Ibis standing on a bin"/>
          <Image className="block dark:hidden -mb-2" src={'/ibis-light.png'} height={600/2} width={600/2} alt="Ibis standing on a bin"/>
    
    </section>
  )
}