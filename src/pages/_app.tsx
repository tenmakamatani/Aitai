import App from "next/app";
import { DIContainer } from '@libs/application/DI';
import { AuthProvider } from '@modules/provider/auth';

export default class Aitai extends App {
  render() {
    DIContainer.setup();
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}
