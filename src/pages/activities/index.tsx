import { AboutPage } from "@/components/aboutus/about";
import { HistoryPage } from "@/components/aboutus/history";
import { LocationPage } from "@/components/aboutus/location";
import { WeddingsPage } from "@/components/aboutus/weddings";
import { ChildrenPage } from "@/components/activities/about";
import { AdultProgrammePage } from "@/components/activities/adultprogramme";
import { YouthProgrammePage } from "@/components/activities/youthprogrammme";
import { Hero } from "@/components/hero";
import { buttonVariants } from "@/components/ui/button";
import { menuItems } from "@/components/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const tabList = menuItems.filter((t) => {
  return t.submenuof === "activities" && t.submenu.length < 1;
});
console.log(tabList);

const tabViews = {
  activities: {
    header: {
      title: "Children",
      imageUrl: "/images/about-img.jpeg",
    },
    component: () => <ChildrenPage />,
  },

  youthprogramme: {
    header: {
      title: "Youth",
      imageUrl: "/images/wedding-img.jpeg",
    },
    component: () => <YouthProgrammePage />,
  },

  adultprogramme: {
    header: {
      title: "Adults",
      imageUrl: "/images/location-img.jpeg",
    },
    component: () => <AdultProgrammePage />,
  },

  community: {
    header: {
      title: "External Groups",
      imageUrl: "/images/funeral-img.jpeg",
    },
    component: () => <div>Funerals and Bereavement</div>,
  },
};

const AboutUs = () => {
  const router = useRouter();
  const currentTab =
    (router.query.tab as keyof typeof tabViews) ?? "activities";
  const currentTabPath =
    currentTab !== "activities"
      ? router.pathname + "?tab=" + currentTab
      : router.pathname;

  const tabView = tabViews[currentTab] ?? tabViews["activities"];

  return (
    <div>
      <Hero
        backgroundImage={tabView.header.imageUrl}
        title={tabView.header.title}
        sectionClassName="bg-center"
      />

      <section className="container mx-auto px-4">
        <ul className="flex items-center gap-4 md:justify-center my-10 overflow-auto pb-3 *:shrink-0">
          {tabList.map((t) => {
            const isActive = t.path === currentTabPath;

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
