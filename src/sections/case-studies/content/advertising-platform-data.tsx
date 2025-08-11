import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { GoogleAdsIcon } from "@/components/icons/skills/google-ads-icon";
import { MetaIcon } from "@/components/icons/skills/meta-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";
import type { CaseStudyData } from "../types";

export const advertisingPlatformData: CaseStudyData = {
  projectData: {
    title: "Advertising Platform",
    description: "Built in 6 weeks | Solo development",
    sections: [
      {
        title: "Problem",
        items: [
          "• Manual campaign creation takes weeks and introduces human error",
          "• Time-intensive processes delay campaign launches and reduce efficiency"
        ]
      },
      {
        title: "Solution",
        items: [
          "• Intelligent form-to-email-to-campaign creation automation",
          "• Multi-tenant architecture with automatic form routing",
          "• Zero-touch campaign configuration eliminates manual setup"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Eliminates human error in campaign creation process",
          "• Reduces setup time"
        ]
      }
    ]
  },
  techStack: [
    { icon: <TypescriptIcon className="w-12 h-12" />, name: "TypeScript" },
    { icon: <NextjsIcon className="w-12 h-12" />, name: "Next.js" },
    { icon: <GoogleAdsIcon className="w-12 h-12" />, name: "GoogleAdsAPI" },
    { icon: <MetaIcon className="w-12 h-12" />, name: "MetaAPI" },
    { icon: <SupabaseIcon className="w-12 h-12" />, name: "Supabase" }
  ]
};