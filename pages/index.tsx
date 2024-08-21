
import Image from "next/image";
import { Inter } from "next/font/google";
import { sriracha } from "@/styles/font";
import { Button } from "@/components/ui/button";
import { message } from "@/components/ui/message";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-center flex-col slide-enter-content">
      <h1 className={sriracha.className}>Home Page</h1>
      <Button onClick={() => message.success('This is a success message.')}>sdsda</Button>
    </div>
  );
}
