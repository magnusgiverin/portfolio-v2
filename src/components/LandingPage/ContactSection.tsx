'use client';
import { contactSection } from "@/src/resources/text/landingPageText";
import { useQuickTransition } from "@/src/utils/QuickTransitionLink";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [confirmationMessage, setConfirmationMessage] = useState(''); // New state for confirmation message

  const sendEmail = async () => {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: form.message,
        senderName: form.name,
        senderEmail: form.email,
      }),
    });

    if (response.ok) {
      setConfirmationMessage('Sent Successfully'); // Success message
    } else {
      setConfirmationMessage('Error. Please try again later.'); // Error message
    }

    if (response.ok) {
      setForm({ name: "", email: "", message: "" }); // Clear form on success
    }

    // Clear the confirmation message after 5 seconds
    setTimeout(() => setConfirmationMessage(''), 5000);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };

  const quickTransition = useQuickTransition();

  return (
    <section
      id="contact"
      className="relative z-10 flex flex-col bg-white"
    >
      <span className="flex flex-row justify-between items-center border-t md:border-t-0 border-neutral-200">
        <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
          {contactSection.heading}
        </h2>
        <div className="flex-1 flex justify-end">
          <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
            {contactSection.subheading}
          </h2>
        </div>
      </span>
      <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
        <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 pr-8 items-center justify-center">
        </div>
        <div className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white px-2 md:px-8 p-8 flex flex-col gap-4"
          >
            <span className="flex flex-row max-w-3xl w-full">
              <label className="w-1/2 font-mono text-xs text-neutral-700 uppercase tracking-widest">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-black border-r-0 px-3 py-2 text-sm focus:outline-none focus:border-orange-600"
                />
              </label>
              <label className="w-1/2 font-mono text-xs text-neutral-700 uppercase tracking-widest">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-black px-3 py-2 text-sm focus:outline-none focus:border-orange-600"
                />
              </label>
            </span>
            <label className="max-w-3xl font-mono text-xs text-neutral-700 uppercase tracking-widest">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full border border-black px-3 py-2 text-sm focus:outline-none focus:border-orange-600 resize-none"
              />
            </label>
            <span className="flex flex-row gap-2 mt-4 ">
              <button
                type="button"
                  onClick={(e) => quickTransition.handleTransition(e, "#top")}
                className="cursor-pointer relative inline-block w-12 h-12 border border-black hover:border-orange-600 bg-white text-black uppercase text-xs font-bold tracking-widest rounded-none overflow-hidden group"
              >
                <span
                  className="absolute inset-0 left-0 top-0 w-full h-full bg-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 items-center flex justify-center gap-2 material-symbols-outlined">
                  arrow_upward
                </span>
              </button>
              <button
                type="submit"
                className="w-min cursor-pointer relative inline-block px-8 py-2 border border-black hover:border-orange-600 bg-white text-black uppercase text-xs font-bold tracking-widest rounded-none overflow-hidden group"
              >
                <span
                  className="absolute inset-0 left-0 top-0 w-full h-full bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
                  aria-hidden="true"
                />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 items-center flex justify-center gap-2">
                  {"send"} <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </button>
              <span className="flex flex-1 items-center justify-start text-sm font-mono text-green-600">
                {confirmationMessage}
              </span>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;