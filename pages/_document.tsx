
import { Html, Head, Main, NextScript } from "next/document";
import { inter } from "@/styles/font";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={inter.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
