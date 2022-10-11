import { Formik } from "formik";
import Swal from "sweetalert2";
import { sendEmail } from "services/email";

export default function FormContact() {
  return (
    <div className="flex flex-col w-full bg-emerald-900/50 border-2 border-slate-900 rounded-md p-8 h-full">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Requerido";
          } else if (values.name.length > 30) {
            errors.name = "Debe tener 30 caracteres o menos";
          }
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Debes ingresar un email válido";
          }
          if (!values.message) {
            errors.message = "Requerido";
          } else if (values.message.length > 400) {
            errors.message = "Debe tener 400 caracteres o menos";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          sendEmail(values)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Gracias por contactarte conmigo",
              });
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error al enviar el mensaje",
              });
            });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-lg mx-auto"
          >
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="name"
                className="mb-2 mt-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:border-b-4 focus:border-b-lime-500 focus:shadow-outline"
              />
              {errors.name && touched.name && errors.name}

              <label
                htmlFor="email"
                className="mb-2 mt-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:border-b-4 focus:border-b-lime-500 focus:shadow-outline"
              />
              {errors.email && touched.email && errors.email}

              <label
                htmlFor="message"
                className="mb-2 mt-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="Mensaje"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:border-b-4 focus:border-b-lime-500 focus:shadow-outline"
              />
              {errors.message && touched.message && errors.message}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 mt-4 font-bold text-white bg-slate-800 rounded-full hover:bg-slate-400 hover:scale-110 hover:shadow-lg focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
