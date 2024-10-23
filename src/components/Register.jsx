import '../styles/components/register.scss'

const Register = () => {
    return (
        <>
            <section className="container-register">
                <h1>Olá, Seja Bem Vindo(a)!</h1>
                <form>
                    <article>
                        <label htmlFor="">Nome: </label>
                        <input type="text" />
                    </article>
                    <article>
                        <label htmlFor="">E-Mail: </label>
                        <input type="text" />
                    </article>
                    <article>
                        <label htmlFor="">Senha: </label>
                        <input type="text" />
                    </article>
                    <article>
                        <label htmlFor="">Confirme sua Senha: </label>
                        <input type="text" />
                    </article>
                    <button>Cadastrar</button>
                </form>
            </section>
        </>
    )
}

export default Register