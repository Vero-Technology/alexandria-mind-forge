import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6"
      style={{ background: "hsl(0 0% 3%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "hsl(0 0% 92%)",
            }}
          >
            Get in Touch
          </h2>
          <p
            className="text-base"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "hsl(0 0% 50%)",
            }}
          >
            Interested in what Alexandria can do for your team? Reach out.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p
              className="text-2xl font-light"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: "hsl(0 0% 92%)",
              }}
            >
              Thank you for reaching out.
            </p>
            <p
              className="mt-3 text-sm"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "hsl(0 0% 50%)",
              }}
            >
              We'll be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
              { name: "business", label: "Business", type: "text", placeholder: "Your organisation" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-xs uppercase tracking-[0.2em] mb-3"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "hsl(0 0% 45%)",
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b py-3 text-sm outline-none transition-colors duration-300 placeholder:opacity-30"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "hsl(0 0% 88%)",
                    borderColor: "hsl(0 0% 18%)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "hsl(0 0% 40%)")}
                  onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 18%)")}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "hsl(0 0% 45%)",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your use case..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b py-3 text-sm outline-none transition-colors duration-300 resize-none placeholder:opacity-30"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "hsl(0 0% 88%)",
                  borderColor: "hsl(0 0% 18%)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "hsl(0 0% 40%)")}
                onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 18%)")}
              />
            </div>

            <div className="pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "hsl(0 0% 88%)",
                  background: "hsl(0 0% 10%)",
                  border: "1px solid hsl(0 0% 18%)",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 15%)";
                  e.currentTarget.style.borderColor = "hsl(0 0% 30%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 10%)";
                  e.currentTarget.style.borderColor = "hsl(0 0% 18%)";
                }}
              >
                Send Inquiry
              </motion.button>
            </div>

            <p
              className="text-center text-xs mt-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "hsl(0 0% 35%)",
              }}
            >
              Or reach us directly at{" "}
              <a
                href="mailto:logan@alexandrialabs.uk"
                className="underline underline-offset-4 transition-colors duration-200"
                style={{ color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 80%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 55%)")}
              >
                logan@alexandrialabs.uk
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
