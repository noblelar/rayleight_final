// import Image from 'next/image'
import { Inter } from "next/font/google";
import HomePage from "@/components/homepage/homepage";

const inter = Inter({ subsets: ["latin"], weight: "100" });

export default function Home() {
  return (
    // <main
    // className={`flex min-h-screen flex-col items-center  ${inter.className}`}
    // >
    <main className=" min-h-[100vh] ">
      <HomePage />
    </main>
    // </main>
  );
}
