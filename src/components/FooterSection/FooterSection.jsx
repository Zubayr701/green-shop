const FooterSection = ({ imgSrc, title, description }) => {
    return (
      <div className="text-center md:text-left">
        <img
          src={imgSrc}
          alt={title}
          className="mx-auto md:mx-0 w-16 h-16"
        />
        <h3 className="font-bold text-lg mt-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default FooterSection;
  