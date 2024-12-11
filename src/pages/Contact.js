import React from "react";

import WomanImg from "../img/contact/woman.png";

const Contact = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 lg:pt-24 gap-x-8 text-center lg:text-right">
          <div className="hidden lg:flex bg-[#eaf7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"></div>
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1 font-bold">راه های ارتباطی</h1>
            <p className="mb-12">پیشنهادات خود را با من به اشتراک بگذارید.</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="نام..."
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                />
                <input
                  type="email"
                  placeholder="ایمیل..."
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                  type="text"
                  placeholder="پیام شما..."
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                />
                <button className="btn mb[30px] mx-auto lg:mx-0 self-start">ارسال نظر</button>
            </form>
          </div>
          <div className="lg:flex-1">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
