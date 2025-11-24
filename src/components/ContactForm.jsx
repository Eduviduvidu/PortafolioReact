import "@css/contactForm.css";
import { useTranslation } from "react-i18next";

// Component to create the contact form
export default function ContactForm() {
  const { t } = useTranslation(["contact"]);
  /**
   * Funció encarregada d'enviar les dades a l'hora d'enviar el formulari
   */
  function sendForm(eve) {
    eve.preventDefault();
  }

  return (
    <form method="POST" action="/contact" onSubmit={sendForm}>
      <div className="ev-input-group form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder=" "
          required=""
        />
        <label forHtml="name">{t("Name")}</label>
      </div>
      <div className="ev-input-group form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder=" "
          required=""
        />
        <label forHtml="email">{t("Email")}</label>
      </div>
      <div className="ev-input-group form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          placeholder=" "
          style={{ height: "100px" }}
          required=""
        ></textarea>{" "}
        <label forHtml="message">{t("Message")}</label>
      </div>
      <button type="submit" className="btn btn-primary" name="submit">
        Commit
      </button>
    </form>
  );
}
