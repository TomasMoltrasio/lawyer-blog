import emailjs from "emailjs-com";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
const TEMPLATE_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;

export const sendEmail = async (templateParams) => {
  try {
    const res = await emailjs.send(
      SERVICE_ID.toString(),
      TEMPLATE_KEY.toString(),
      templateParams,
      PUBLIC_KEY.toString()
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
