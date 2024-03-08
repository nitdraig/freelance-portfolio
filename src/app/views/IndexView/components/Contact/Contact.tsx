import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/locals/languages";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const { language } = useLanguage();
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32fafdae-c103-4d78-9efd-eeff7f00a64d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
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
  };

  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F]  h-full text-white pb-10 pt-10"
      id="contact"
    >
      <h2 className="lg:p-12 text-center uppercase tracking-[2px] lg:tracking-[8px] text-white text-2xl lg:text-3xl lg:pt-3 pt-5 pb-8">
        {translations[language].contactWithMe}
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-w-5xl flex  lg:mx-auto mx-4 flex-col lg:flex-row  mt-8"
      >
        <div className="w-full max-w-lg lg:mr-10">
          <h3 className=" text-2xl font-bold mb-4">
            {translations[language].contactText}
          </h3>
          <form onSubmit={onSubmit} className="mt-10">
            <input type="hidden" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  aria-labelledby="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#6A0DAD] peer-focus:dark:text-[#fff]"
                >
                  {translations[language].contactForm1}
                </label>
              </div>
              <div className="relative z-0">
                <input
                  id="email"
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  aria-labelledby="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#6A0DAD] peer-focus:dark:text-[#fff]"
                >
                  {translations[language].contactForm2}
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-[#6A0DAD] focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  aria-labelledby="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#6A0DAD] peer-focus:dark:text-[#fff]"
                >
                  {translations[language].contactForm3}
                </label>
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
            aria-hidden="true"
            className="text-2xl   flex font-bold items-center text-[#fff] hover:text-[#6A0DAD]"
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
