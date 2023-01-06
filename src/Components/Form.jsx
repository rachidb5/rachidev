import React, { useContext, useState } from "react";
import "./form.css";
import Contact from "./Contact";
import Context from "../Context/Context";
import axios from "axios";

function Form(props) {
  const { menu, language } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  async function formSend() {
    await axios.post("https://mailsender.fly.dev/", {
      from: `${name}, ${email}`,
      to: "jordan.rachid@gmail.com",
      subject: `${name}, ${email}`,
      html: `<span>${content}</span>`,
    }).then(res => console.log(res)).catch(e => console.log(e.res))
  }
  return (
    <div className="d-flex justify-content-evenly mt-5">
      <div className="form-container bg-light col-4 mr-5">
        <form>
          <div className="mb-3">
            <label>{language ? "Nome: " : "Name: "}</label>
            <input
              type="name"
              class="form-control mt-2"
              placeholder={language ? "Type your name" : "Digite seu nome"}
              onChange={(e)=>setName(e.target.value)}
            />
            <label>Email: </label>
            <input
              type="email"
              class="form-control mt-2"
              placeholder={language ? "Type your email" : "Digite seu email"}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label>{language ? "Your message: " : "Sua mensagem: "}</label>
            <textarea
              className="mt-2 form-control"
              placeholder={language ? "Your message: " : "Sua mensagem: "}
              id="floatingTextarea"
              onChange={(e)=>setContent(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary mt-2 col-12" type="button" onClick={() => formSend()}>
            {language ? "Send: " : "Enviar: "}
          </button>
        </form>
      </div>
      <Contact />
    </div>
  );
}

export default Form;
