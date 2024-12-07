import React from "react";

import WomanImg from "../img/home/woman.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:left-[20%] flex flex-col justify-center items-center lg:items-start">
            <div className="flex flex-col items-center text-center">
            <h1 className="h1">
              عکاس و سازنده <br/> فیلم با جدیدترین <br/> تکنولوژی روز
            </h1>
            <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">ایران , تهران</p>
            <Link to={"/contact"} className="btn mb-[30px] lg:w-[50%]">تماس با من</Link>
            </div>
          </div>
          <div className="flex justify-start max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={WomanImg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
