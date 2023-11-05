"use client"
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import axios from "axios";
import * as Yup from 'yup';

export type FormValues = {
    name       : string;
    surname    : string;
    email      : string;
    password   : string;
    repassword : string;
};

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const initialValues: FormValues = {
    name       : "",
    surname    : "",
    email      : "",
    password   : "",
    repassword : "",
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Ad minimum 2 simvol olmalıdır')
    .max(50, 'Ad maxsimum 50 simvol ola bilər')
    .required('Adınız daxil edin'),
    surname: Yup.string()
    .min(2, 'Soyad minimum 2 simvol olmalıdı')
    .max(50, 'Soyad maxsimum 50 simvol ola bilər')
    .required('Soyadınızı daxil edin'),
    email: Yup.string().email('Yanlış e-mail adresi').required('E-mail tələb olunur'),
    password: Yup.string()
     .min(6, 'Şifrə minimum 6 simvol ola bilər')
     .required('Şifrə tələb olunur'),
    repassword: Yup.string()
     .oneOf([Yup.ref('password')], 'Təkrar şifrə uyğun deyil')
     .required('Şifrəni yenidən daxil edin'),
    });


  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/user/register', {
        name     : values.name,
        surname  : values.surname,
        email    : values.email.toLowerCase(),
        password : values.password,
      });

      toast.success("Qeydiyyat uğurla tamamlandı");
      router.push("/user/login");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section
      className="flex items-center justify-center h-screen text-black"
    >
      <ToastContainer />
      <div className="login-form card w-[90%] sm:w-[90%] md:[70%] lg:w-[50%] bg-sky-300 shadow-lg rounded-lg">
        <div className="card-body p-4">
          <h1 className="font-thin text-center text-2xl">
            Control Panelə xoş gəlmisiz
          </h1>
          <h3 className="font-bold text-center mt-3 text-lg">Qeydiyyatdan keçin</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto">
                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="name" className="text-gray-500 font-bold">
                    Ad
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınızı daxil edin"
                    className={`form-control rounded p-2 ${
                      errors.name && touched.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="name">
                    {(message) => (
                      <div className="error-message">{message}</div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="surname" className="text-gray-500 font-bold">
                    Soyad
                  </label>
                  <Field
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Soyadınızı daxil edin"
                    className={`form-control rounded p-2 ${
                      errors.surname && touched.surname ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage name="surname">
                    {(message) => (
                      <div className="error-message">{message}</div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="email" className="text-gray-500 font-bold">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email adresinizi dail edin"
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

                <div className="form-group flex flex-col mt-4">
                  <label htmlFor="repassword" className="text-gray-500">
                     Şifrəni təkrar yazın
                  </label>
                  <Field
                    id="repassword"
                    name="repassword"
                    type="password"
                    placeholder="Şifrənizi yenidən daxil edin"
                    className={`form-control p-2 rounded ${
                      errors.repassword && touched.repassword ? "is-invalid" : ""
                    }`}
                    autoComplete="true"
                  />
                  <ErrorMessage name="repassword">
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
                    {loading ? <span>Siguping...</span> : <span>Register</span>}
                  </button>
                </div>

                <Link
                  href="/user/login"
                  className="text-purple-600 mt-2 font-medium text-center block"
                >
                  Qeydiyyatdan keçmisiniz ?  Daxil olun
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Register;
