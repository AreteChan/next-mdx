import Header from "@/components/Header";
import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";
import type { AppProps } from "next/app";
import { MessageContainer } from "@/components/ui/message";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <MessageContainer />
    <div className="py-16 z-0">
      <Component {...pageProps} />
    </div>
    </>
}
