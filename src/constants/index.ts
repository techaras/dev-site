export type NavigationItem = {
  name: string;
  link: string;
  mobileLink: string;
};

export const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    link: "#home",
    mobileLink: "#home-mobile"
  },
  {
    name: "How I Work",
    link: "#how-i-work",
    mobileLink: "#how-i-work-mobile"
  },
  {
    name: "Case Studies",
    link: "#case-studies",
    mobileLink: "#case-studies-mobile"
  },
  {
    name: "Skills",
    link: "#skills",
    mobileLink: "#skills-mobile"
  },
  {
    name: "About me",
    link: "#about-me",
    mobileLink: "#about-me-mobile"
  },
  {
    name: "Contact",
    link: "#contact",
    mobileLink: "#contact"
  }
];