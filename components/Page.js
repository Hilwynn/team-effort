import React, { Fragment } from "react";
import Head from "next/head";

const Page = ({ children, heading, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title} | Team Effort</title>
      </Head>
      <h2 className="page-title">{heading || title}</h2>
      {children}
    </Fragment>
  );
};

export default Page;
