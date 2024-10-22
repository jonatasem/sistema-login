//scss
import '../styles/components/login.scss';

import logoLogin from '../assets/login.png';

import { useState } from 'react';

//icons
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

const Login = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="container-login">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <article>
          <label htmlFor="user-email">E-mail: </label>
          <input type="text" name="user-email" id="user-email" onChange={(e) => setUserEmail(e.target.value)} required />
          <FaUser />
        </article>
        <article>
          <label htmlFor="user-password">Senha: </label>
          <input type="text" name="user-password" id="user-password" onChange={(e) => setUserPassword(e.target.value)} required />
          <FaLock />
        </article>

        <article className="recall-forget">
          <label>
            <input type="checkbox" />  
            Lembre de Mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </article>

        <button>Entrar</button>

        <article className="signup-link">
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </article>
      </form>

      <div className="container-logo">
        <img src={logoLogin} alt="imagem da logo login" />
        </div>
    </section>
  )
}

export default Login
