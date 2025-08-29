import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { GoogleAdsIcon } from "@/components/icons/skills/google-ads-icon";
import { MetaIcon } from "@/components/icons/skills/meta-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import type { CaseStudyData } from "../types";

export const advertisingPlatformData: CaseStudyData = {
  projectData: {
    slug: "advertising-platform",
    title: "Ad Platform",
    description: "Built in 6 weeks | Solo development",
    sections: [
      {
        title: "Problem",
        items: [
          "• Manual campaign creation takes weeks",
          "• Human error creates costly mistakes"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Automated form-to-campaign pipeline",
          "• Multi-tenant architecture with smart routing",
          "• Near zero-touch automation for campaign setup",
        ]
      },
      {
        title: "Impact",
        items: [
          "• Eliminates campaign creation errors",
          "• Dramatically reduces setup time"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/techaras/form-automation-dev/",
      detailPath: "/case-studies/advertising-platform"
    }
  },
  techStack: [
    { icon: <TypescriptIcon className="w-12 h-12" />, name: "TypeScript" },
    { icon: <NextjsIcon className="w-12 h-12" />, name: "Next.js" },
    { icon: <GoogleAdsIcon className="w-12 h-12" />, name: "GoogleAdsAPI" },
    { icon: <MetaIcon className="w-12 h-12" />, name: "MetaAPI" },
    { icon: <SupabaseIcon className="w-12 h-12" />, name: "Supabase" }
  ]
};