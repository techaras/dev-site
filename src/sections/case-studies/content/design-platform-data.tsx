import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { ThreejsIcon } from "@/components/icons/skills/three-js-icon";
import { OpencvIcon } from "@/components/icons/skills/open-cv-icon";
import { LlmsIcon } from "@/components/icons/skills/llms-icon";
import { PythonIcon } from "@/components/icons/skills/python-icon";
import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import type { CaseStudyData } from "../types";

export const designPlatformData: CaseStudyData = {
  projectData: {
    slug: "design-platform",
    title: "Design Platform",
    description: "Built in 6 months | Patent-winning innovation | AI Forge validated",
    sections: [
      {
        title: "Problem",
        items: [
          "• Brands lack design direction and targeting",
          "• No market research backing decisions"
        ]
      },
      {
        title: "Solution",
        items: [
          "• AI generates designs from brand analysis",
          "• 3D visualization with advanced editing",
          "• LLM-powered market research integration"
        ]
      },
      {
        title: "Impact",
        items: [
          "• Won U.S. Patent #US10324916B2",
          "• AI Forge accelerator (12 of 500+ applicants)"
        ]
      }
    ],
    buttons: {
      githubUrl: "https://github.com/techaras/lasi-ai-app",
      detailPath: "/case-studies/design-platform"
    }
  },
  techStack: [
    { icon: <NextjsIcon className="w-12 h-12" />, name: "Next.js" },
    { icon: <ThreejsIcon className="w-12 h-12" />, name: "Three.js" },
    { icon: <OpencvIcon className="w-12 h-12" />, name: "OpenCV" },
    { icon: <LlmsIcon className="w-12 h-12" />, name: "LLMs" },
    { icon: <PythonIcon className="w-12 h-12" />, name: "Python" },
    { icon: <MongodbIcon className="w-12 h-12" />, name: "MongoDB" }
  ]
};