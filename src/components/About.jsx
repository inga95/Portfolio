import React from "react";
import Me from "../assets/me.jpg";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1c1c1c] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#0081C9]">
              About me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid-cols-2 justify-center items-center">
          <div className="flex gap-6 ">
            <img
              src={Me}
              alt="Me"
              style={{ width: "250px", borderRadius: "10px" }}
            />
            <p>
              I am a 27-year-old woman who lives in Bærum. Right now, I will
              immediately finish my bachelor's in Frontend and Mobile
              Development at Høyskolen Kristiania. During my bachelor's degree,
              I have learned a lot of exciting things, but what has interested
              me the most is Javascript, making apps, HTML, CSS and React. As
              well as the topics of usability, design and prototyping. In my
              spare time I love to travel, cuddle with dogs, go for walks in
              nature and play frisbee golf!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
