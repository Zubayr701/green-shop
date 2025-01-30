const NewsletterSection = () => {
    return (
      <div>
        <h3 className="font-bold text-lg">Would you like to join newsletters?</h3>
        <div className="flex mt-2">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600">
            Join
          </button>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          We usually post offers and challenges in newsletters. We’re your online houseplant destination.
        </p>
      </div>
    );
  };
  
  export default NewsletterSection;
  