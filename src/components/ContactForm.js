import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import '../styles.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqogayz');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setSubmitted(true);
      timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Got an exciting project in mind? Let&apos;s talk about it!</p>
      <p>
        I&apos;m always eager to explore new ideas and projects, so if
        you&apos;d like to chat, please don&apos;t hesitate to get in touch.
      </p>
      <div className="contact-form-container">
        <div className="contact-form-cont">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-element">
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </label>
            </div>
            <div className="form-element">
              <label htmlFor="email">
                Email Address
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </label>
            </div>
            <div className="form-element">
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-button"
            >
              Get in touch
            </button>
            {submitted && (
              <div className="success-message">
                <h2>Thanks for contacting me!</h2>
                <p>I&apos;ll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
