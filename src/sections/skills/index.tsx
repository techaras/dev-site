import {
  PythonIcon,
  TypescriptIcon,
  ReactIcon,
  NextjsIcon,
  FastAPIIcon,
  ViteIcon,
  LangchainIcon,
  OpenaiIcon,
  HuggingFaceIcon,
  OpencvIcon,
  PineconeIcon,
  PrismaIcon,
  PostgresqlIcon,
  MongodbIcon,
  DockerIcon,
  VercelIcon,
  StripeIcon,
  ClerkIcon,
} from "./icons";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

// Flattened skills data for grid layout
const skillsData: Skill[] = [
  // Row 1
  { name: "Python", icon: <PythonIcon className="w-12 h-12" /> },
  { name: "LangChain", icon: <LangchainIcon className="w-12 h-12" /> },
  { name: "Hugging Face", icon: <HuggingFaceIcon className="w-12 h-12" /> },
  { name: "OpenAI API", icon: <OpenaiIcon className="w-12 h-12" /> },
  { name: "OpenCV", icon: <OpencvIcon className="w-12 h-12" /> },
  { name: "FastAPI", icon: <FastAPIIcon className="w-12 h-12" /> },
  // Row 2
  { name: "TypeScript", icon: <TypescriptIcon className="w-12 h-12" /> },
  { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
  { name: "Next.js", icon: <NextjsIcon className="w-12 h-12" /> },
  { name: "Vite", icon: <ViteIcon className="w-12 h-12" /> },
  { name: "PostgreSQL", icon: <PostgresqlIcon className="w-12 h-12" /> },
  { name: "Prisma", icon: <PrismaIcon className="w-12 h-12" /> },
  // Row 3
  { name: "MongoDB", icon: <MongodbIcon className="w-12 h-12" /> },
  { name: "Pinecone", icon: <PineconeIcon className="w-12 h-12" /> },
  { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
  { name: "Vercel", icon: <VercelIcon className="w-12 h-12" /> },
  { name: "Stripe", icon: <StripeIcon className="w-12 h-12" /> },
  { name: "Clerk", icon: <ClerkIcon className="w-12 h-12" /> },
];

export function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MY SKILLS
          </h2>
          <p className="font-heading text-2xl text-foreground">
            BUILDING PRODUCTION AI SYSTEMS THAT SOLVE REAL PROBLEMS
          </p>
        </div>

        {/* Skills Grid - 6x3 with rounded corners */}
        <div className="mb-12">
          <div className="w-full max-w-6xl mx-auto bg-[#353739] p-[1px] rounded-2xl">
            <div className="grid grid-cols-6 gap-[1px] bg-[#353739] rounded-2xl overflow-hidden">
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-black">
                  <div className="p-6 flex flex-col items-center justify-center text-center h-[180px] w-full">
                    <div className="mb-4">
                      {skill.icon}
                    </div>
                    <span className="font-body text-sm text-foreground font-light">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
          <p className="font-body text-[#b3b3b3] text-base">
            Don't see your stack?
          </p>
          <button className="px-6 pt-2 pb-1 border border-[#353739] rounded-full font-heading text-sm text-foreground hover:border-[#555759] transition-colors duration-300 cursor-pointer hover:opacity-80">
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  )
}