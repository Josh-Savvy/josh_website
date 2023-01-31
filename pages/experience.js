import React from "react";
import ExperienceCard from "../components/Home/Experience/ExperienceCard";
import Layout from "../components/Layout";

const Experience = () => {
  const experienceList = [
    {
      company: "Techsity Inc",
      position: "Software Developer",
      jobType: "On-Site/Remote",
      duration: "Jun 2022 - Till Date",
      imgUrl: "/static/assets/img/techsity.jpg",
    },
    {
      company: "Career break",
      position: "",
      jobType: "",
      duration: "Jan 2022 - May 2022",
      imgUrl: "/static/assets/img/royalgate.jpg",
    },
    {
      company: " HNG & I4G Internship programme",
      position: "Software Developer (Intern)",
      jobType: "Remote",
      duration: "Aug 2021 - Dec 2021",
      imgUrl: "/static/assets/img/hngi.jpg",
    },
    {
      company: "RoyalGates Technology",
      position: "Product/Graphics Designer",
      jobType: "On-Site",
      duration: "Jan 2017 - Jan 2020",
      imgUrl: "/static/assets/img/royalgate.jpg",
    },
  ];

  return (
    <Layout activeLink="experience" title="Experience">
      <>
        <div
          className="container py-16 md:py-20"
          style={{ zIndex: "-1" }}
          id="work"
        >
          <div
            className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3"
            style={{ zIndex: "-1" }}
          >
            {experienceList.map((e, i) => (
              <ExperienceCard
                key={i}
                jobType={e.jobType}
                position={e.position}
                duration={e.duration}
                company={e.company}
                imgUrl={e.imgUrl}
              />
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Experience;
