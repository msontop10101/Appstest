//COMPONENTS
import Header from "../components/LandingPage/Header";
import Section1 from "../components/LandingPage/Section1";
import Layout from "../components/General/Layout";
import Section2 from "../components/LandingPage/Section2";
import Section3 from "../components/LandingPage/Section3";
import Section4 from "../components/LandingPage/Section4";
import Section5 from "../components/LandingPage/Section5";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <Layout>
          <Section1 />
        </Layout>
        <Section2 />
        <Layout>
          <Section3 />
          <Section4 />
        </Layout>
        <Section5 />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
