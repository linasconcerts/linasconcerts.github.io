import React from "react";

const Flyer = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img object-cover">
          <img
            src="images/hero-img.jpg"
            alt="profile-picture"
            className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
          />
        </div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Flyer
          </h2>

          <p className="pb-5">text</p>
          <p className="pb-5">text</p>

          <p>text</p>

          <p>text</p>
        </div>
      </div>
    </section>
  );
};

export default Flyer;
