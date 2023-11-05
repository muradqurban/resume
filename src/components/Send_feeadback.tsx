import React,{ useState } from "react";
import { useFormik } from 'formik';
import { Element } from "react-scroll";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Send_feedback = () => {
  const [submited, setSubmited] = useState(false);
  const [loading,setLoading] = useState(false)
  const inputStyle =
    "h-[60px] caret-white px-2 bg-[#B9B4C7] dark:bg-indigo-500 placeholder-gray-600 dark:placeholder-gray-100  placeholder:text-lg outline-0";
  
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  
  const sendForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      setLoading(true)
      setSubmited(true)
      try {
        const response = await axios.post("/api/request/send", values);
        setLoading(false)
        toast.success("Mesajınız göndərildi");
        actions.resetForm();
      } catch (error:any) {
        toast.error(error.response.data)
      }
    },
  });
  return (
    <Element
      name="feedback"
      className="w-[80%] mx-auto md:flex md:h-screen p-4"
    >
      <div className="md:w-[50%] md:flex items-center justify-center hidden">
        <h1 className="text-4xl">Burda sizin reklamınız ola bilər :)</h1>
      </div>
      <div className="md:w-[50%] py-10 flex justify-center items-center">
        {submited ? (
          <p className="font-italic text-xl hover:text-sky-800">
            Təşəkkür edirəm.
          </p>
        ) : (
          <form
            onSubmit={sendForm.handleSubmit} 
            className="w-[100%] flex flex-col gap-4 bg-indigo-400 dark:bg-indigo-700 p-2"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              className={inputStyle}
              type="text"
              {...sendForm.getFieldProps("name")}
              placeholder="Adınız"
            />
            {sendForm.touched.name && sendForm.errors.name && (
            <div className="text-red-600">{sendForm.errors.name}</div>
          )}
            <input
              className={inputStyle}
              type="email"
              {...sendForm.getFieldProps("email")}
              placeholder="E-mail ünvanınız"
            />
            {sendForm.touched.email && sendForm.errors.email && (
            <div className="text-red-600">{sendForm.errors.email}</div>
          )}
            <textarea
              className="h-[200px] max-h-[200px] min-h-[200px] caret-white px-2 bg-[#B9B4C7] dark:bg-indigo-500 placeholder-gray-600 dark:placeholder-gray-100 placeholder:text-lg outline-0"
              {...sendForm.getFieldProps("message")}
              placeholder="Fikirlərinizi mənimlə bölüşün"
            />
          {sendForm.touched.message && sendForm.errors.message && (
            <div className="text-red-600">{sendForm.errors.message}</div>
          )}
          <button
            className="bg-purple-950 text-white w-[203px] h-[53px] hover:bg-purple-800"
            type="submit"
          >
            {loading ? "Gözləyin..." :"Göndər"}
          </button>
          </form>
        )}
      </div>
    </Element>
  );
};

export default Send_feedback;
