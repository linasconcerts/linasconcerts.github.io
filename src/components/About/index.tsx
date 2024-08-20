import React from "react";

const About = () => {
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
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 newamsterdam">
            DAS BIN ICH
          </h2>

          <p className="pb-5 text-xl newamsterdam">
            Hallöchen, ich bin Lina und komme aus Siegen in Nordrhein-Westfalen.
          </p>
          <p className="pb-5 text-xl newamsterdam">
            Seit dem Sommer 2023 bin ich in der Konzert- und Festivalfotografie
            unterwegs und habe meine Leidenschaft zum Beruf gemacht. Ich
            fotografiere Konzerte, Bandshootings und BTS-Material und
            unterstütze euch außerdem im Bereich Social Media, um gemeinsam die
            Reichweite zu erreichen, die eure Musik verdient.
          </p>

          <p className="pb-5 text-xl newamsterdam">
            Mein Schwerpunkt liegt bei Shootings in den Genres Metal, Punk, Rock
            und Indie. Schaut euch gerne mein Portfolio an – vielleicht stehe
            ich ja schon bald für eure Band hinter der Kamera!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
