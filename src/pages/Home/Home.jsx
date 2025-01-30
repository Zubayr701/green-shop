import React from "react";
import ShopSection from "../../components/ShopSection/ShopSection";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import PlantCard from "../../components/PlantCard/PlantCard";
import BlogPosts from "../../components/BlogPost/BlogPost";
import Footer from "../../components/Footer/Footer";

const Home = () => (

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-cera ">
  <Header/>
    <Carousel/>
    <ShopSection />
    <PlantCard/>
    <BlogPosts/>
    <Footer/>
</div>

);

export default Home;