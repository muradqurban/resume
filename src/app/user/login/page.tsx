"use client"
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import axios from "axios";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/user/login', {
        email: values.email.toLowerCase(),
        password: values.password,
      });
      toast.success("Conrol panelə yönləndirlirsiniz");
      router.push("/control");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section
      id="Login-section"
      className="flex items-center justify-center h-screen text-black"
    >
      <ToastContainer />
      <div className="login-form card w-[90%] sm:w-[90%] md:[70%] lg:w-[50%] bg-sky-300 shadow-lg rounded-lg">
        <div className="card-body p-4">
          <h1 className="font-thin text-center text-2xl">
            Control Panelə xoş gəlmisiz
          </h1>
          <h3 className="font-bold text-center mt-3 text-lg">Daxil ol</h3>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="email" className="text-gray-500 font-bold">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail adresinizi daxil edin"
                    className={`form-control rounded p-2 ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="email">
                    {(message) => (
                      <div className="error-message">{message}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="password" className="text-gray-500">
                    Şifrə
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Şifrənizi daxil edin"
                    className={`form-control p-2 rounded ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                    autoComplete="true"
                  />
                  <ErrorMessage name="password">
                    {(message) => (
                      <div className="error-message">{message}</div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-moderateBlue border border-moderateBlue hover:bg-blue-800 active:bg-blue-800 active:ring-1 ring-blue-500 ring-offset-2 px-5 py-2 rounded-md text-black hover:text-white disabled:bg-blue-300 disabled:border-blue-300"
                  >
                    {loading ? <span>Sigining...</span> : <span>Login</span>}
                  </button>
                </div>

                <Link
                  href="/user/register"
                  className="text-purple-600 mt-2 font-medium text-center block"
                >
                  Qeydiyyatınız yoxdur ? indi keçin..
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;
