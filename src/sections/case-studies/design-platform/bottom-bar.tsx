import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { ThreejsIcon } from "@/components/icons/skills/three-js-icon";
import { OpencvIcon } from "@/components/icons/skills/open-cv-icon";
import { LlmsIcon } from "@/components/icons/skills/llms-icon";
import { PythonIcon } from "@/components/icons/skills/python-icon";
import { MongodbIcon } from "@/components/icons/skills/mongo-db-icon";

export function BottomBar() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-4xl">
        {/* Next.js */}
        <div className="flex flex-col items-center gap-4">
          <NextjsIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">Next.js</span>
        </div>

        {/* Three.js */}
        <div className="flex flex-col items-center gap-4">
          <ThreejsIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">Three.js</span>
        </div>

        {/* OpenCV */}
        <div className="flex flex-col items-center gap-4">
          <OpencvIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">OpenCV</span>
        </div>

        {/* LLMs */}
        <div className="flex flex-col items-center gap-4">
          <LlmsIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">LLMs</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center gap-4">
          <PythonIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">Python</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center gap-4">
          <MongodbIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">MongoDB</span>
        </div>
      </div>
    </div>
  );
}