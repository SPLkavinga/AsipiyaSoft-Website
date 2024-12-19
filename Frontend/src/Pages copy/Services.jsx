import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./../Components/NabBar";
import backgroundImg from "../assets/serviceback.png";
import Cooperate from "./../Components/Cooperate";
import Footer from "./../Components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

// Import images for services
import erpImage from "../assets/SystemIcons/Icon5.png";
import pawningImage from "../assets/SystemIcons/Icon2.png";
import microfinanceImage from "../assets/SystemIcons/Icon1.png";
import goldLoanImage from "../assets/SystemIcons/Icon4.png";
import leasingImage from "../assets/SystemIcons/Icon3.png";
import realEstateImage from "../assets/SystemIcons/Icon7.png";
import socialMediaImage from "../assets/SystemIcons/Icon8.png";
import printingImage from "../assets/SystemIcons/Icon9.png";

const services = [
  {
    id: "erp",
    title: "ERP Systems",
    image: erpImage,
    link: "/ERP",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "pos",
    title: "Pawning Systems",
    image: pawningImage,
    link: "/Prawing",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "micro-finance",
    title: "Microfinance",
    image: microfinanceImage,
    link: "/Microfinance",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "gold-loan",
    title: "Gold Loan System",
    image: goldLoanImage,
    link: "/Prawing",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "leasing",
    title: "Leasing System",
    image: leasingImage,
    link: "/Leasing",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "Estate",
    title: "Real Estate",
    image: realEstateImage,
    link: "/service/insurance",
    description:
      "Unleash the full potential of your online presence with our expert web development services. Whether you need a responsive website, an e-commerce platform, or a custom web application, our skilled team is dedicated to bringing your vision to life.",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    image: socialMediaImage,
    link: "/service/crm",
    description:
      "Enhance your brand's visibility with our comprehensive social media marketing strategies, tailored to engage and grow your audience effectively.",
  },
  {
    id: "printing",
    title: "Aipiya Printing",
    image: printingImage,
    link: "/service/inventory",
    description:
      "Deliver exceptional quality with our state-of-the-art printing solutions, perfect for all your personal and professional needs.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <img
          src={logo}
          alt="Loading..."
          className="w-[200px] h-auto animate-bounce"
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />

      <div
        className="relative flex items-center justify-start w-full h-[650px]  bg-center bg-cover md:h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        <div className="z-10 w-full mx-[20px] md:mx-[60px] xl:mx-[120px] py-8 md:w-2/3 p-4 md:mt-[-50px] text-center md:text-left">
          <motion.p
            className="mb-3 text-sm text-white md:text-[19.2px] "
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Services
          </motion.p>

          <motion.h2
            className="text-4xl font-semibold text-white md:text-[47.78px] mb-2"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            Our Services
          </motion.h2>

          <motion.h2
            className="text-4xl font-semibold text-white md:text-[47.78px] mb-[16px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            and Expertise
          </motion.h2>

          <motion.p
            className="mb-8 font-normal text-white md:text-[16px] leading-normal tracking-wide w-full xl:w-[488px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={textVariants}
          >
            At Asipiya Soft Solutions, we empower your business for success in
            the digital age. Join us on an innovative journey towards efficiency
            and thrive together in shaping your future.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container">
        <h1 className="mt-10 mb-[8px] text-[30px] xl:text-[39.81px] font-medium text-center text-black">
          Services We're <span className="text-[#7D00C5]">Offer</span>
        </h1>
        <div className="grid justify-center grid-cols-1 gap-4 mb-4 mx-[20px] xl:mx-[120px] xxl:mx-16 p-4 xl:p-14 xxl:p-22 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="block w-[300px] h-full xl:w-[350px] xl:h-[387px] p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="mb-4 mt-8 text-center ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[100px] object-contain"
                  />
                </div>
                <h2 className="mb-2 text-[23.04px] font-semibold">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-[16px] line-clamp-4">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Cooperate />
      <Footer />
    </>
  );
}

export default Services;
