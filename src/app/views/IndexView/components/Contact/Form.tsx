"use client";
import { useLanguage } from "@/app/components/LanguageContext";
import React, { useEffect } from "react";
import translations from "@/app/locals/languages";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { useMailprex } from "usemailprex-react";

const Form = () => {
  const { language } = useLanguage();
  const webName = "Portfolio Freelance Landing";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY || "";
  const url = process.env.NEXT_PUBLIC_API_URL_SEND || "";
  const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN || "";
  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    webName,
    emailDestiny,
    formToken,
  });

  useEffect(() => {
    if (response) {
      if (response.error) {
        Swal.fire({
          title: "Error sending message. Try again later.",
          icon: "error",
        });
      } else {
        Swal.fire({ title: "Message sent successfully!", icon: "success" });
      }
    }
  }, [response]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
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
  );
};

export default Form;
