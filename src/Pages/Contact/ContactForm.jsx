import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "your_service_id"; // Replace with your EmailJS service ID
    const templateID = "your_template_id"; // Replace with your EmailJS template ID
    const userID = "your_user_id"; // Replace with your EmailJS user ID

    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        console.log("Message sent: ", result.text);
        setIsSubmitted(true);
      },
      (error) => {
        console.log("Error: ", error.text);
      }
    );
  };

  return (
    <div className="pt-14 pb-6 flex items-center justify-center bg-gray-900 text-white">
      <div className="mx-auto w-full px-6 md:flex">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-indigo-400">Get in Touch</h2>
          <p className="text-gray-400 mt-2">
            Have a question or want to work together? Drop us a message!
          </p>
          <div className="mt-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-purple-500 p-3 rounded-full"></span>
              <p className="text-gray-300">tonmoysds110@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-pink-500 p-3 rounded-full"></span>
              <p className="text-gray-300">Khilkhet, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg ml-10"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <p className="text-green-400 mt-4">
            Thank you for your message! We'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

// ===========================================================

// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="pt-14 pb-6 flex items-center justify-center bg-gray-900 text-white">
//       <div className="mx-auto w-full px-6 md:flex">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-indigo-400">Get in Touch</h2>
//           <p className="text-gray-400 mt-2">
//             Have a question or want to work together? Drop us a message!
//           </p>
//           <div className="mt-6 flex flex-col space-y-4">
//             <div className="flex items-center space-x-3">
//               <span className="bg-purple-500 p-3 rounded-full"></span>
//               <p className="text-gray-300">tonmoysds110@gmail.com</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="bg-pink-500 p-3 rounded-full"></span>
//               <p className="text-gray-300">Khilkhet, Dhaka, Bangladesh</p>
//             </div>
//           </div>
//         </div>
//         <form className="bg-gray-800 p-6 rounded-lg shadow-lg ml-10">
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               rows="4"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full mt-4 bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
