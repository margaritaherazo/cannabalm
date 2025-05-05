import Hero from '../components/Hero';
import Info from '../components/Info';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <section id="sobre">
        <About />
      </section>
      <section id="beneficios">
        <Info />
      </section>
      <section id="contato">
        <Contact />
      </section>
    </>
  );
}

export default Home;
