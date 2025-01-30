import FooterSection from '../FooterSection/FooterSection';
import NewsletterSection from '../NewsLetter/NewsLetter';
import FooterMiddle from '../FooterMiddle/FooterMiddle';
import FooterBottom from '../FooterBottom/FooterBottom';
import cactus2 from "../../../public/cactus2.png"
import cactus3 from "../../../public/cactus3.png"


const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FooterSection
            imgSrc={cactus3}
            title="Garden Care"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <FooterSection
            imgSrc={cactus2}
            title="Plant Renovation"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <FooterSection
            imgSrc={cactus3}
            title="Watering Garden"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <NewsletterSection />
        </div>
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
