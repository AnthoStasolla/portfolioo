import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container-contact">
        <h2 className="text-about">Contact</h2>
        <h4 className="text-about1 mb-5">
          -Compila il form o inviami una mail - anthostasoll89@gmail.com -
        </h4>
        <form
          className="container"
          action="https://getform.io/f/52b40f2e-4e64-40af-9fd3-95e4afdeddec"
          method="POST"
        >
          <div className="form-outline mb-4">
            <input type="text" id="name" name="name" className="form-control" />
            <label className="form-label" htmlFor="name">
              NOME
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
            <label className="form-label" htmlFor="email">
              EMAIL
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              name="textarea"
              id="text"
              rows="6"
            ></textarea>
            <label className="form-label" htmlFor="text">
              SCRIVI UN MESSAGGIO
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="checkbox"
              placeholder="Message here..."
            />
            <label className="form-check-label" htmlFor="checkbox">
              Inviami una copia di questo messaggio
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-secondary">
              Invia
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
