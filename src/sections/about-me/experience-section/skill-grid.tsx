export function SkillGrid() {
  const skills = [
    "ML Pipelines",
    "Multi-platform Integrations", 
    "RAG Systems",
    "LangChain",
    "Multi-tenant SaaS",
    "Enterprise Data Governance",
    "Full-stack Dev",
    "ML Algorithms", 
    "Payment Processing",
    "System Architecture"
  ];

  return (
    <div className="flex flex-col gap-3">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="px-4 py-2 border border-[#353739] rounded-full font-body text-sm text-muted-foreground w-fit whitespace-nowrap edge-to-edge"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
