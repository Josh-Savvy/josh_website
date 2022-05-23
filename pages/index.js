import React, { useState, useEffect } from "react";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import jwt from "jsonwebtoken";
import { JWT_SIGNATURE } from "../config";
import ReviewCard from "../components/Home/ReviewCard";
import RecentProjectsCard from "../components/Home/RecentProjectsCard";

const Home = () => {
  const [viewCounts, setViewCounts] = useState(0);

  const countHandler = () => {
    const visitCount = localStorage.getItem("page_view");
    const visitCountUserId = localStorage.getItem("user_page_token");

    if (!visitCountUserId) {
      localStorage.setItem(
        "user_page_token",
        jwt.sign(
          "User Visit Page Token",
          JWT_SIGNATURE || process.env.JWT_SIGNATURE
        )
      );
      visitCount = 18;
      localStorage.setItem("page_view", 18);
    } else if (visitCount) {
      visitCount = Number(visitCount) + 1;
      localStorage.setItem("page_view", visitCount);
    }
    setViewCounts(visitCount);
  };

  useEffect(() => {
    countHandler();
  }, []);

  return (
    <Layout title="Homepage" footer={true}>
      <Hero viewCounts={viewCounts} />
      <ReviewCard />
      <RecentProjectsCard />
    </Layout>
  );
};

export default Home;
