import type { Service } from "./types";
import { BarsIcon } from "@/components/icons/services/bars-icon";
import { BrainIcon } from "@/components/icons/services/brain-icon";
import { CartIcon } from "@/components/icons/services/cart-icon";
import { CloudIcon } from "@/components/icons/services/cloud-icon";
import { DataIcon } from "@/components/icons/services/data-icon";
import { DollarIcon } from "@/components/icons/services/dollar-icon";
import { LinkIcon } from "@/components/icons/services/link-icon";
import { MobileIcon } from "@/components/icons/services/mobile-icon";
import { SparklesIcon } from "@/components/icons/services/sparkles-icon";

export const services: Service[] = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "AI Process Automation",
    description: "Build custom LLM solutions and workflows to eliminate repetitive tasks and boost productivity."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "API Integration Solutions", 
    description: "Connect your systems seamlessly—from Xero to Shopify, payroll to banking, eliminating manual workflows."
  },
  {
    icon: <BrainIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Intelligence Dashboards",
    description: "Transform scattered data into actionable insights with self-service analytics and custom reporting."
  },
  {
    icon: <BarsIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Predictive Analytics Models",
    description: "Forecast cash flow and business trends using machine learning on your Xero and CRM data."
  },
  {
    icon: <MobileIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Mobile App Development",
    description: "Launch your MVP with React Native and Expo, including app store submission and optimisation."
  },
  {
    icon: <CloudIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Cloud Cost Optimisation",
    description: "Analyse and reduce AWS/Azure/GCP spend by 20-40% through serverless migration and smart scaling."
  },
  {
    icon: <DataIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Data Modernisation",
    description: "Migrate from legacy systems to BigQuery or Snowflake with cost-optimised ETL pipelines."
  },
  {
    icon: <CartIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "Conversion Optimisation",
    description: "Boost sales through funnel analytics,\nA/B testing, and Core Web Vitals performance improvements."
  },
  {
    icon: <DollarIcon className="w-6 h-6" />,
    iconBg: "bg-black/20 border border-[#353739]",
    title: "SaaS Spend Governance",
    description: "Discover and optimise your 139+ software subscriptions, eliminating waste and negotiating better deals."
  }
];