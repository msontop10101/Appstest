//COMPONENTS
import Header from "../components/LandingPage/Header/Header";
import Section1 from "../components/LandingPage/Section1/Section1";

import Layout from "../components/General/Layout";
import Section2 from "../components/LandingPage/Section2/Section2";
import Section3 from "../components/LandingPage/Section3/Section3";
import Section4 from "../components/LandingPage/Section4/Section4";
import Section5 from "../components/LandingPage/Section5/Section5";
import Footer from "../components/LandingPage/Footer/Footer";

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
