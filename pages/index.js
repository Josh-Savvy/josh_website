import countapi from "countapi-js";
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { APP_URL } from "../config";

const Home = () => {
  const [viewCounts, setViewCounts] = useState(0);

  useEffect(() => {
    countapi
      .visits(APP_URL || process.env.APP_URL)
      .then((response) => {
        setViewCounts(response.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout title="Homepage">
      <Hero viewCounts={viewCounts} />
    </Layout>
  );
};

export default Home;
