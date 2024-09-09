import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import "../styles/pages/form.scss";

const Form = () => {
  return (
    <>
      <Topbar />
      <section className="container-form">
        <form className="registration-form" action="/submit" method="post">
          <fieldset>
            <legend>Cadastre-se</legend>

            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" required />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Data de Nascimento</label>
              <input type="date" id="dob" name="dob" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" name="address" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>

            <button type="submit" className="btn-submit">Enviar</button>
          </fieldset>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Form;
