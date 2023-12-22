import React, { Fragment } from "react";

import Footer from "./Footer";
import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";
import Navbar from "./layout/Navbar";
import { Helmet } from "react-helmet-async";
import Layout from "../../Screens/Layout";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog Page</title>
        <meta name="description" content="Jurident Blog Page" />
      </Helmet>

      <Fragment>
        <Navbar />
        <BlogIntro />
        <BlogContent />
        <Footer />
      </Fragment>
    </Layout>
  );
};

export default Blog;
