// import React from 'react'
import styles from "./about-us.module.css";
import clsx from "clsx";

type gridType = { img: string; heading: string; content: string };
type teamType = { img: string; name: string; level: string };

const About = () => {
  const gridContent: gridType[] = [
    {
      img: "https://bimcorner.com/wp-content/uploads/2020/08/oslo.png",
      heading: "Oslo",
      content:
        "The capital of Norway, where we live, work, develop our passions and spend time with our families and friends",
    },
    {
      img: "https://bimcorner.com/wp-content/uploads/2020/08/budownictwo.png",
      heading: "Civil Engineering",
      content:
        "The entire six are civil engineering graduates from the most important Polish Technical Universities",
    },
    {
      img: "https://bimcorner.com/wp-content/uploads/2020/08/BIM.png",
      heading: "BIM",
      content:
        "A common interest in new technologies in the construction industry turned into a passion. Each of us work with BIM on a daily basis",
    },
    {
      img: "https://bimcorner.com/wp-content/uploads/2020/08/bear.png",
      heading: "IPA",
      content: "We are all foodies of this golden drink 🙂",
    },
  ];

  const teams: teamType[] = [
    {
      img: "https://bimcorner.com/wp-content/uploads/2020/07/Ignacy-e1595842280774-300x300.jpg",
      name: "Ignacy Lozinski",
      level: "BIM Coordinator / BIM Software Developer",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-3">We are BIM Corner</h1>
      <img
        src="https://bimcorner.com/wp-content/uploads/2020/08/O-nas-transparent1-scaled-1-2048x832.jpg"
        className="w-full"
        alt=""
      />
      {/* bim corner content */}
      <div className="mt-5 mb-10">
        <p className="text-xl font-basic mb-3">
          BIM Corner is a blog mainly focused on Building Information Modeling
          technology. Our main goal is to spread knowledge in the field of BIM
          and its practical use in construction projects.
        </p>
        <p className="text-xl font-basic mb-3">
          We did not want to create another place where BIM is presented only in
          theory. We wanted our reader to be able to learn practical knowledge
          which can be used on a daily basis.
        </p>
        <p className="text-xl font-basic mb-3">
          Help us change the face of today’s construction industry and join the
          group of BIM Corner readers. We are convinced that this decision will
          be beneficial for you and your future career.
        </p>
      </div>
      <h1 className="text-4xl font-bold mb-3">What we have in common?</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
        {gridContent.map((item: gridType) => (
          <div className="flex flex-col items-center">
            <img
              className={clsx(styles.about_us_grid_img)}
              src={item.img}
              alt="grid"
            />
            <h3 className="text-2xl font-bold my-4">{item.heading}</h3>
            <p className="text-center text-lg">{item.content}</p>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-3">Our teams</h1>
      <div></div>
    </div>
  );
};

export default About;
