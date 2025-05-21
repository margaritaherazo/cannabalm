import aboutImg from '../assets/imgs/georgia.jpg'; 

function About() {
  return (
    <section className="about-section py-5" id="sobre">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image on the left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImg} alt="About Cannabalm" className="img-fluid rounded" />
          </div>

          {/* Text on the right */}
          <div className="col-md-6">
            <h2 className="mb-4">Sobre a Cannabalm</h2>
            <p>
              A Cannabalm nasceu da paixão pela cura natural e pelo bem-estar à base de plantas.
              Feita à mão, combina conhecimento tradicional com cuidado moderno para trazer alívio e conforto.
            </p>
            <p>
              Nossa missão é ajudar as pessoas a se sentirem melhor com cuidados suaves, eficazes e honestos para a pele.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
