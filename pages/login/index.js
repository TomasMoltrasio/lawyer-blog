import LoginContainer from "containers/LoginContainer";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginContainer />
    </>
  );
}
