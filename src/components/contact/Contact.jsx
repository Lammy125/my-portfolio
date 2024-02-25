import "./Contact.scss";
import { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const contactData = {
    title: "Contact me",
    email: "adeyemoolamide47@gmail.com",
    whatsapp: "+2348179347214",
    messenger: "adeyemo.olamide3",
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when form is submitted

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      );
      toast.success("Message sent successfully");

      console.log(result.text);
    } catch (error) {
      console.log(error.text);
      toast.error("Message not sent");
    }

    setIsLoading(false); // Set isLoading back to false after form submission
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact">
        <h2 data-aos="fade-down">{contactData.title}</h2>
        <div className="contactCon">
          <div className="contactOptions">
            <article className="contactOption" data-aos="zoom-in">
              <MdOutlineEmail size={20} className="icon" />
              <h4>Email</h4>
              <h5>{contactData.email}</h5>
              <div className="link">
                <a href="mailto:adeyemoolamide47@gmail.com" target="blank">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contactOption" data-aos="zoom-in">
              <RiMessengerLine size={23} className="icon" />
              <h4>Messenger</h4>
              <h5>{contactData.messenger}</h5>
              <div className="link">
                <a href="https://m.me/adeyemo.olamide3" target="blank">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contactOption" data-aos="zoom-in">
              <BsWhatsapp size={20} className="icon" />
              <h4>WhatsApp</h4>
              <h5>{contactData.whatsapp}</h5>
              <div className="link">
                <a
                  href="https://api.whatsapp.com/send?phone=+2348179347214"
                  target="blank"
                >
                  Send a message
                </a>
              </div>
            </article>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} data-aos="fade-left">
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
              />
              <textarea
                name="message"
                id=""
                cols="50"
                rows="7"
                placeholder="Enter message"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn_load"
                disabled={isLoading}
                data-aos="flip-up"
              >
                {isLoading ? (
                  <CircularProgress size={15} thickness={7} />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
