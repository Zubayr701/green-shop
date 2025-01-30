import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Order from "../../components/Order/Order";
import Payment from "../../components/Payment/Payment";
const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
        <Header/>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="md:col-span-2">
          <Form />
        </div>
        <div className="">
          <Order />
          <br />
          <Payment />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
