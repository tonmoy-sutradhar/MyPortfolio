import Banner from "../../Component/Navbar/Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../Contact/ContactForm";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </>
  );
};

export default Home;
