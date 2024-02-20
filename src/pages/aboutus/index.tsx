import { AboutPage } from "@/components/aboutus/about";
import { HistoryPage } from "@/components/aboutus/history";
import { LocationPage } from "@/components/aboutus/location";
import { Hero } from "@/components/hero";
import { buttonVariants } from "@/components/ui/button";
import { menuItems } from "@/components/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const tabList = menuItems.filter((t) => {
  return (
    (t.submenuof === "aboutus" && t.submenu.length < 1) || t.id === "aboutus"
  );
});

const tabViews = {
  aboutus: {
    header: {
      title: "About us",
      imageUrl: "/images/about-img.jpeg",
    },
    component: () => <AboutPage />,
  },

  weddings: {
    header: {
      title: "Weddings",
      imageUrl: "/images/wedding-img.jpeg",
    },
    component: () => <div>Wedding</div>,
  },

  location: {
    header: {
      title: "Location",
      imageUrl: "/images/location-img.jpeg",
    },
    component: () => <LocationPage />,
  },

  funerals: {
    header: {
      title: "Funerals and Bereavement",
      imageUrl: "/images/funeral-img.jpeg",
    },
    component: () => <div>Funerals and Bereavement</div>,
  },

  history: {
    header: {
      title: "History",
      imageUrl: "/images/history-img.jpeg",
    },
    component: () => <HistoryPage />,
  },

  baptism: {
    header: {
      title: "Baptism",
      imageUrl: "/images/baptism-img.jpeg",
    },
    component: () => <div>Baptism</div>,
  },
};

const AboutUs = () => {
  const router = useRouter();
  const currentTab = (router.query.tab as keyof typeof tabViews) ?? "aboutus";

  const tabView = tabViews[currentTab] ?? tabViews["aboutus"];

  return (
    <div>
      <Hero
        backgroundImage={tabView.header.imageUrl}
        title={tabView.header.title}
        sectionClassName="bg-center"
      />

      <section className="container mx-auto px-4">
        <ul className="flex items-center gap-4 md:justify-center my-10 overflow-auto pb-3 *:shrink-0">
          {router.isReady &&
            tabList.map((t) => {
              const isActive = t.path === router.asPath;

              return (
                <li key={t.id}>
                  <Link
                    href={t.path}
                    className={buttonVariants({
                      variant: isActive ? "default" : "outline",
                      className: "uppercase",
                    })}
                    scroll={false}
                  >
                    {t.label}
                  </Link>
                </li>
              );
            })}
        </ul>

        <div>{<tabView.component />}</div>
      </section>
    </div>
  );
};

export default AboutUs;
