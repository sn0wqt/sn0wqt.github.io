import React from "react";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { portfolioData } from "../data/portfolioData";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form data submitted:", data);
    alert("Thank you for your message! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-bg-primary">
      <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-heading">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 font-heading">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="card-orange p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent-light text-accent">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1 font-heading">
                      Location
                    </h4>
                    <p className="text-text-secondary">
                      {portfolioData.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-orange p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent-light text-accent">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1 font-heading">
                      Email
                    </h4>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-orange p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent-light text-accent">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1 font-heading">
                      Phone
                    </h4>
                    <a
                      href={`tel:${portfolioData.contact.phone}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-orange p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-8 font-heading">
                Send Me a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                      errors.name
                        ? "border-error focus:ring-error"
                        : "border-accent/30 focus:border-accent focus:ring-accent"
                    } bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                      errors.email
                        ? "border-error focus:ring-error"
                        : "border-accent/30 focus:border-accent focus:ring-accent"
                    } bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                      errors.subject
                        ? "border-error focus:ring-error"
                        : "border-accent/30 focus:border-accent focus:ring-accent"
                    } bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="Project Discussion"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none ${
                      errors.message
                        ? "border-error focus:ring-error"
                        : "border-accent/30 focus:border-accent focus:ring-accent"
                    } bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="Write your message here..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FiSend />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
