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
    <div className="flex flex-col gap-3 overflow-y-auto flex-1 max-h-[520px]">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className="min-h-52 px-4 py-2 border border-[#353739] rounded-[2rem] font-body text-sm text-muted-foreground w-full whitespace-nowrap text-center flex items-center justify-center flex-shrink-0"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
