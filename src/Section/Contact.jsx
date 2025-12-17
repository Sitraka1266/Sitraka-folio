import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import HiddenDateInput from './hiddenInput';


export function Contact() {
  const contactEmail = "sitrakaratovonarivo84@gmail.com";
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fuk8woh",   // Remplace par ton service EmailJS
      "template_4krqjl8",  // Remplace par ton template EmailJS
      form.current,
      "JVb8h9L4mZzZ53y4A"    // Remplace par ta clé publique EmailJS
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setFailed("Failed to send message. Please try again.");
      }
    );
  };




  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-fade-in">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Contact Info */}
            <div className="contact-info text-center mb-5 animate-fade-in delay-200">
              <h4 className="mb-3">My contact details</h4>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactEmail}`} className="text-decoration-none text-primary">
                  {contactEmail}
                </a>
              </p>
              <div className="social-links mt-3">
                <a href="https://github.com/Sitraka1266" target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://x.com/sitrakarat16009" target="_blank" rel="noreferrer" className="mx-2 social-icon icon-shadow-hover">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form animate-fade-in delay-300 p-5 shadow-lg rounded-4">
              <h4 className="mb-4 text-center">Send me a message</h4>
              {success && (
                <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                  {success}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSuccess("")}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {failed && (
                <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                  {failed}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setFailed("")}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="user_email" placeholder="Your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
                </div>
                <HiddenDateInput />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
