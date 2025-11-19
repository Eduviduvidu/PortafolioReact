export default function ContactForm() {
  return (
    <form
      method="POST"
      action="https://localhost/eduviduvidu/public/es/contacto"
    >
      <div className="ev-input-group form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder=" "
          required=""
        />
        <label forHtml="name">Nombre</label>
      </div>
      <div className="ev-input-group form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder=" "
          required=""
        />
        <label forHtml="email">Email</label>  
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
        <label forHtml="message">Mensaje</label>
      </div>
      <button type="submit" className="btn btn-primary" name="submit">
        Commit
      </button>
    </form>
  );
}
