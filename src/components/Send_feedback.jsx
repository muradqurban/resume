import { useFormik } from "formik";
import { useState } from "react";
import { Element } from "react-scroll";

const SendFeedback = () => {
  const timestamp = new Date().toLocaleString();
  const [submited, setSubmited] = useState(false);
  const inputStyle =
    "h-[60px] caret-white px-2 bg-[#B9B4C7] dark:bg-indigo-500 placeholder-gray-600 dark:placeholder-gray-100  placeholder:text-lg outline-0";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      timestamp: "",
    },
    onSubmit: (values, actions) => {
      console.log({
        name: values.name,
        email: values.email,
        message: values.message,
        timestamp: timestamp,
      });

      actions.setSubmitting(false);
      formik.resetForm();
      setSubmited(true);
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
            onSubmit={formik.handleSubmit}
            className="w-[100%] flex flex-col gap-4 bg-indigo-400 dark:bg-indigo-700 p-2"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              className={inputStyle}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              name="name"
              placeholder="Adınız"
            />
            <input
              className={inputStyle}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              placeholder="E-mail ünvanınız"
            />
            <input
              className={inputStyle}
              type="hidden"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={timestamp}
              name="timestamp"
              readOnly
            />
            <textarea
              className="h-[200px] max-h-[200px] min-h-[200px] caret-white px-2 bg-[#B9B4C7] dark:bg-indigo-500 placeholder-gray-600 dark:placeholder-gray-100 placeholder:text-lg outline-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
              placeholder="Fikirlərinizi mənimlə bölüşün"
            />
            {formik.errors.name && (
              <div id="feedback">{formik.errors.name}</div>
            )}
            <button
              className="bg-indigo-200 dark:bg-indigo-950 w-[203px] h-[53px] hover:bg-purple-300 dark:hover:bg-purple-800"
              type="submit"
            >
              Göndər
            </button>
          </form>
        )}
      </div>
    </Element>
  );
}

export default SendFeedback;
