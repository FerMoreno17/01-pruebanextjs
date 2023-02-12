import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "./MainLayout.module.css";
import Navbar from "../Navbar";

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - nextjs</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
