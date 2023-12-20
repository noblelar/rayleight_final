import type { ReactElement } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { useInView } from "framer-motion";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  const [color, setColor] = useState<Boolean>(true);
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [isInView]);

  

  return (
    <>
      <Header colorA={color} />
      <main ref={myRef}>{children}</main>
      <Footer />
    </>
  );
}
