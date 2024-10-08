"use client";
import React, { useState } from "react";
import emailjs, { init, send } from "emailjs-com"; // Import emailjs library
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.name.value, // Using email as sender name
      to_email: e.target.email.value, // Replace with the recipient's email
      message: e.target.message.value,
      subject: e.target.subject.value, // Add the subject from the form
    };
    // Send email using EmailJS
    send(
      "service_r141dmi",
      "template_rp50ibn",
      templateParams,
      "TKqNXjU1xniNmKwwF"
    )
      .then((response) => {
        console.log("Message sent successfully!", response);
        setEmailSubmitted(true);
        // Clear input fields
        e.target.reset();
      })
      .catch((err) => {
        console.error("Failed to send the message. Error: ", err);
      });
  };

  return (
    <section
      id="contacts"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
        <Link href="https://www.linkedin.com/in/dhanish-mohammed-15165222a/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={34}
              height={34}
              className="lg:w-full lg:h-full"
            />
          </Link>
          <Link href="https://github.com/dhanish123">
            {/* <Image src={GithubIcon} alt="Github Icon" width={34} height={34} /> */}
            <Image
              src={GithubIcon}
              alt="Github Icon"
              width={34}
              height={34}
              className="lg:w-full lg:h-full"
            />
          </Link>
          {/* <Link href="https://www.linkedin.com/in/dhanish-mohammed-15165222a/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={34}
              height={34}
              className="lg:w-full lg:h-full"
            />
          </Link> */}
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white mb-2 block text-sm font-medium"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white mb-2 block text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="dhanish@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying Hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Sent Successfully
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
