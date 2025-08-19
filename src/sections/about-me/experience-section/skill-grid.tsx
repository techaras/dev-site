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
    <div className="flex flex-col gap-3 overflow-y-auto flex-1">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="px-4 py-2 border border-[#353739] rounded-[2rem] font-body text-sm text-muted-foreground w-full whitespace-nowrap text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
