import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const contactData = {
    title: "Contact me",
    email: "adeyemoolamide47@gmail.com",
    whatsapp: "+2348179347214",
    messenger: "adeyemo.olamide3",
  };
  return (
    <section id="contact">
      <div className="contact">
        <h2>{contactData.title}</h2>
        <div className="contactCon">
          <div className="contactOptions">
            <div className="contactOption">
              <MdOutlineEmail size={20} className="icon" />
              <h4>Email</h4>
              <h5>{contactData.email}</h5>
              <div className="link">
                <a href="mailto:adeyemoolamide47@gmail.com" target="blank">
                  Send a message
                </a>
              </div>
            </div>
            <article className="contactOption">
              <RiMessengerLine size={23} className="icon" />
              <h4>Messenger</h4>
              <h5>{contactData.messenger}</h5>
              <div className="link">
                <a href="https://m.me/adeyemo.olamide3" target="blank">
                  Send a message
                </a>
              </div>
            </article>
            <article className="contactOption">
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
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Enter Full name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <textarea
                name=""
                id=""
                cols="40"
                rows="7"
                placeholder="Enter message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
