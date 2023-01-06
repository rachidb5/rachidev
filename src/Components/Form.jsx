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
  const [sent, setSent] = useState(0)

  async function formSend() {
    await axios.post("https://mailsender.fly.dev/", {
      from: `${name}, ${email}`,
      to: "jordan.rachid@gmail.com",
      subject: `${name}, ${email}`,
      html: `<span>${content}</span>`,
    }).then(res => {
      console.log(res)
      if(res.status === 201){
        setSent(1)
      }
    }).catch(e => console.log(e.res))
  }
  return (
    <div className="d-flex justify-content-evenly mt-5">
      <div className="form-container bg-light col-4 mr-5">
        <form>
          <div className="mb-3">
            <label>{language ? "Nome: " : "Name: "}</label>
            <input
              type="name"
              className="form-control mt-2"
              placeholder={language ? "Type your name" : "Digite seu nome"}
              onChange={(e)=>setName(e.target.value)}
            />
            <label>Email: </label>
            <input
              type="email"
              className="form-control mt-2"
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
          {}
        </form>
        {sent === 1 ?<div className="bg-success mt-3 d-flex flex-row justify-content-center p-2">
          <span className="text-white white">Mensagem enviada</span>
        </div>: <div></div>}
        {sent === -1 ?<div className="bg-danger mt-3 d-flex flex-row justify-content-center p-2">
          <span className="text-white white">Erro ao enviar mensagem</span>
        </div>: <div></div>}
      </div>
      <Contact />
    </div>
  );
}

export default Form;
