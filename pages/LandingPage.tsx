//COMPONENTS
import Header from "../components/LandingPage/Header";
import Section1 from "../components/LandingPage/Section1";
import Layout from "../components/General/Layout";
import Section2 from "../components/LandingPage/Section2";
import Section3 from "../components/LandingPage/Section3";
import Section4 from "../components/LandingPage/Section4";

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <Layout>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </Layout>
      </div>
    </>
  );
};

export default LandingPage;
