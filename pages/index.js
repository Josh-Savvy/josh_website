import React, { useState, useEffect } from "react";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import jwt from "jsonwebtoken";
import ReviewCard from "../components/Home/ReviewCard";
import RecentProjectsCard from "../components/Home/RecentProjectsCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  const [viewCounts, setViewCounts] = useState(0);

  // const countHandler = () => {
  //   const visitCount = localStorage.getItem("page_view");
  //   const visitCountUserId = localStorage.getItem("user_page_token");

  //   if (!visitCountUserId) {
  //     localStorage.setItem(
  //       "user_page_token",
  //       jwt.sign("User Visit Page Token", process.env.JWT_SIGNATURE)
  //     );
  //     visitCount = 18;
  //     localStorage.setItem("page_view", 18);
  //   } else if (visitCount) {
  //     visitCount = Number(visitCount) + 1;
  //     localStorage.setItem("page_view", visitCount);
  //   }
  //   setViewCounts(visitCount);
  // };

  // useEffect(() => {
  //   countHandler();
  // }, []);

  return (
    <Layout title="Homepage" footer={true}>
      <Hero viewCounts={viewCounts} />
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <ReviewCard />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <RecentProjectsCard />
      </AnimationOnScroll>
    </Layout>
  );
};

export default Home;
