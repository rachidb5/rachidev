import React from 'react';
import './form.css';
import Contact from './Contact';

function Form(props) {
  return (
    <div className="d-flex justify-content-evenly mt-5">
    <div className="form-container bg-light col-4 mr-5">
      <form>
        <div className="mb-3">
        <label>Nome: </label>
        <input type="name" class="form-control mt-2" placeholder="Digite seu nome" />
        <label>Email: </label>
        <input type="email" class="form-control mt-2" placeholder="Digite seu email" />
        <label>Sua mensagem: </label>
        <textarea className="mt-2 form-control" placeholder="Mensagem" id="floatingTextarea"></textarea>
        </div>
          <button
            className="btn btn-primary mt-2 col-12"
            type="button"
          >
            Enviar
          </button>
      </form>
    </div>
    <Contact />
    </div>
    )
}

export default Form;