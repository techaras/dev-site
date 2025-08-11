import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { ThreejsIcon } from "@/components/icons/skills/three-js-icon";
import { OpencvIcon } from "@/components/icons/skills/open-cv-icon";
import { LlmsIcon } from "@/components/icons/skills/llms-icon";
import { PythonIcon } from "@/components/icons/skills/python-icon";
import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";
import type { CaseStudyData } from "../types";

export const designPlatformData: CaseStudyData = {
  projectData: {
    title: "Design Platform",
    description: "Built in 6 months | Patent-winning innovation | AI Forge validated",
    sections: [
      {
        title: "Problem",
        items: [
          "• Small T-shirt brands don't know what to design or who to design for",
          "• Traditional design process lacks market research and customer insights"
        ]
      },
      {
        title: "Solution",
        items: [
          "• AI research engine analyses brands, owners, and target markets using LLMs",
          "• Generates visual designs displayed on interactive 3D T-shirts",
          "• Advanced editing tools with edge detection and shape segmentation"
        ]
      },
      {
        title: "Achievements",
        items: [
          "• Won U.S. Patent #US10324916B2",
          "• Secured elite AI Forge accelerator placement (12 of 500+ applicants)"
        ]
      }
    ]
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