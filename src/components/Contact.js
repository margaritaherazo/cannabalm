function Contact() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">Contato</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  