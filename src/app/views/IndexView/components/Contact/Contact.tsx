import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/locals/languages";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { useMailprex } from "usemailprex-react";

const Contact = () => {
  const { language } = useLanguage();
  const webName = "Portfolio Freelance Landing";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY || "";
  const url = "https://api.mailprex.top/email/send";
  const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN || "";
  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    webName,
    emailDestiny,
    formToken,
  });
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await handleSubmit(e);
    if (response.error) {
      Swal.fire({
        title: "Error sending message. Try again later.",
        icon: "error",
      });
    } else {
      Swal.fire({ title: "Message sent succesfully!", icon: "success" });
    }
  };
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] h-full text-white pb-10 pt-10"
      id="contact"
    >
      <h3 className="lg:p-12 text-center uppercase tracking-[2px] lg:tracking-[8px] text-white text-2xl lg:text-3xl lg:pt-3 pt-5 pb-8">
        {translations[language].contactWithMe}
      </h3>
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
          <form onSubmit={handleFormSubmit} className="mt-10">
            <input type="hidden" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <label htmlFor="fullname" className="sr-only">
                  {translations[language].contactForm1}
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
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
                  value={formData.email}
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
                  value={formData.message}
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
