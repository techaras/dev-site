import { ArrowRight, Sparkles, Link, BarChart3, TrendingUp, Smartphone, Cloud } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, iconBg, title, description }: ServiceCardProps) {
  return (
    <div className="flex-shrink-0 w-80 relative h-full">
      {/* Main card content */}
      <div className="bg-black border border-[#353739] rounded-3xl p-6">
        {/* Icon with circular background */}
        <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-6`}>
          {icon}
        </div>
        
        {/* Title */}
        <h4 className="font-body font-medium text-[#f2f2f2] text-xl mb-4 leading-tight">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-[#b3b3b3] font-body font-light text-sm leading-relaxed mb-17">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "AI Process Automation",
      description: "Build custom LLM solutions and workflows to eliminate repetitive tasks and boost productivity."
    },
    {
      icon: <Link className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "API Integration Solutions", 
      description: "Connect your systems seamlessly—from Xero to Shopify, payroll to banking, eliminating manual workflows."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "Intelligence Dashboards",
      description: "Transform scattered data into actionable insights with self-service analytics and custom reporting."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "Predictive Analytics Models",
      description: "Forecast cash flow and business trends using machine learning on your Xero and CRM data."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "Mobile App Development",
      description: "Launch your MVP with React Native and Expo, including app store submission and optimisation."
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      iconBg: "bg-black/20 border border-[#353739]",
      title: "Cloud Cost Optimisation",
      description: "Analyse and reduce AWS/Azure/GCP spend by 20-40% through serverless migration and smart scaling."
    }
  ];

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      {/* Header */}
      <button className="font-heading text-xl mb-8 text-[#f2f2f2] hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer">
        Request Service
        <ArrowRight className="w-7 h-7 mb-1" />
      </button>
      
      {/* Card container with defined height */}
      <div className="flex-1 min-h-0">
        {/* Horizontal scrolling cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-none edge-to-edge h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              iconBg={service.iconBg}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}