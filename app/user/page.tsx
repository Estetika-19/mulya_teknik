import HeroSection from "./components/herosection";
import WhyUs from "./components/why_us";
import TrustedBy from "./components/trustedby";
import Profil_Company from "./components/profil";
import Services from "./components/services";
import Portofolio from "./components/portofolio";
import ArticlesSection from "./components/article";
import CTASection from "./components/cta";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <TrustedBy />
      <Profil_Company />
      <Services/>
      <Portofolio/>
      <ArticlesSection/>
      <CTASection/>
    </>
  );
}
