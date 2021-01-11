import App from "next/app";
import { AuthProvider } from '@modules/provider/auth';
import { DIContainer } from "@libs/application/DI";

DIContainer.setup();

export default class Aitai extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}
