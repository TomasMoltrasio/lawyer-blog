import "../styles/globals.css";
import { NextUIProvider, User } from "@nextui-org/react";
import Layout from "../components/Layout";
import Head from "next/head";
import { UserContextProvider } from "context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <NextUIProvider>
        <Layout>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </UserContextProvider>
  );
}

export default MyApp;
