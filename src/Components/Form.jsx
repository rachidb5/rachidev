import React, { useContext } from 'react';
import './form.css';
import Contact from './Contact';
import Context from '../Context/Context';

function Form(props) {
  const { menu, language }= useContext(Context);
  return (
    <div className="d-flex justify-content-evenly mt-5">
    <div className="form-container bg-light col-4 mr-5">
      <form>
        <div className="mb-3">
        <label>{language ? 'Nome: ':'Name: '}</label>
        <input type="name" class="form-control mt-2" placeholder={language?'Type your name':"Digite seu nome"} />
        <label>Email: </label>
        <input type="email" class="form-control mt-2" placeholder={language?'Type your email':"Digite seu email"} />
        <label>{language ? 'Your message: ':'Sua mensagem: '}</label>
        <textarea className="mt-2 form-control" placeholder={language ? 'Your message: ':'Sua mensagem: '} id="floatingTextarea"></textarea>
        </div>
          <button
            className="btn btn-primary mt-2 col-12"
            type="button"
          >
            {language ? 'Send: ':'Enviar: '}
          </button>
      </form>
    </div>
    <Contact />
    </div>
    )
}

export default Form;