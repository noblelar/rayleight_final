import ButtonB from "@/components/buttons/ccbbutton";
import Button from "@/components/buttons/submit";
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
    component: () => <div>About Us</div>,
  },

  history: {
    component: () => <div>History</div>,
  },
};

const AboutUs = () => {
  const router = useRouter();
  const currentTab = (router.query.tab as keyof typeof tabViews) ?? "aboutus";

  const tabView = tabViews[currentTab];

  return (
    <div>
      {/* Hero Component */}

      <section className="container mx-auto px-4">
        <ul className="flex items-center gap-4 justify-center">
          {tabList.map((t) => {
            const isActive = t.path === router.asPath;

            return (
              <li key={t.id}>
                <Link
                  href={t.path}
                  className={buttonVariants({
                    variant: isActive ? "default" : "outline",
                    className: "uppercase",
                  })}
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
