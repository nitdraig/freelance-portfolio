import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/locals/languages";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const { language } = useLanguage();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const webName = "Freelance Portfolio";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "webName":
        value;
        break;
      case "emailDestiny":
        value;
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "subject":
        setSubject(value);
        break;

      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          phone: phone,
          message: message,
          webName: webName,
          emailDestiny: emailDestiny,
        }),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡El mensaje se ha enviado correctamente!",
          text: "Gracias por comunicarte conmigo, en la brevedad te responderé :)",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al enviar el mensaje",
          text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] h-full text-white pb-10 pt-10"
      id="contact"
    >
      <h2 className="lg:p-12 text-center uppercase tracking-[2px] lg:tracking-[8px] text-white text-2xl lg:text-3xl lg:pt-3 pt-5 pb-8">
        {translations[language].contactWithMe}
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-w-5xl flex lg:mx-auto mx-4 flex-col lg:flex-row mt-8"
      >
        <div className="w-full max-w-lg lg:mr-10">
          <h3 className="text-2xl font-bold mb-4">
            {translations[language].contactText}
          </h3>
          <form onSubmit={onSubmit} className="mt-10">
            <input type="hidden" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <label htmlFor="fullname" className="sr-only">
                  {translations[language].contactForm1}
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  required
                  id="fullname"
                  aria-labelledby="fullname"
                  onChange={handleChange}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder={translations[language].contactForm1}
                />
              </div>
              <div className="relative z-0">
                <label htmlFor="email" className="sr-only">
                  {translations[language].contactForm2}
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  required
                  onChange={handleChange}
                  name="email"
                  aria-labelledby="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder={translations[language].contactForm2}
                />
              </div>
              <div className="relative z-0 col-span-2">
                <label htmlFor="message" className="sr-only">
                  {translations[language].contactForm3}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={message}
                  onChange={handleChange}
                  required
                  aria-labelledby="message"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder={translations[language].contactForm3}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md text-lg bg-[#C0C0C0] px-10 py-2 hover:bg-[#6A0DAD] hover:text-[#C0C0C0] text-black"
            >
              {translations[language].send}
              <RiSendPlaneFill className="inline-block ml-2" />
            </button>
          </form>
        </div>
        <div className="w-full max-w-lg mt-8 mb-4 lg:mt-0 lg:ml-10 text-left">
          <h3 className="text-2xl font-bold mb-4">
            {translations[language].contactText1}
          </h3>
          <p className="text-lg mb-4 ">{translations[language].contactText2}</p>
          <a
            href="https://calendly.com/nitdraig"
            target="_blank"
            aria-label={translations[language].contactText5}
            className="text-2xl flex font-bold items-center text-[#fff] hover:text-[#6A0DAD]"
          >
            {translations[language].contactText5}
            <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
