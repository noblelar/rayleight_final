import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/scroll.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { useEffect } from "react";
import { useStore } from "@/store/store";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const setTheme = useStore((store) => store.setTheme);

  useEffect(() => {
    const visibleSections = new Set<HTMLElement>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleSections.add(target);
        else visibleSections.delete(target);
      });

      const activeSection = Array.from(visibleSections).reduce(
        (acc: HTMLElement | null, el) => {
          if (acc === null) return el;
          const elTop = el.getBoundingClientRect().top;
          const accTop = acc.getBoundingClientRect().top;
          return elTop < accTop ? el : acc;
        },
        null
      );

      setTheme(activeSection?.dataset.theme || "black");
    });

    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [router.pathname, setTheme]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// function setTheme(arg0: any) {
//   throw new Error("Function not implemented.");
// }
// setHireUsHidden, setSubmenuActive
// setHireUsHidden(!!activeSection?.dataset.hireUsHidden);
// setSubmenuActive(activeSection?.dataset.submenu as string);
