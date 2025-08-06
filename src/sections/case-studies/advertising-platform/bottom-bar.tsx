import { TypescriptIcon } from "@/components/icons/skills/typescript-icon";
import { NextjsIcon } from "@/components/icons/skills/next-js-icon";
import { GoogleAdsIcon } from "@/components/icons/skills/google-ads-icon";
import { MetaIcon } from "@/components/icons/skills/meta-icon";
import { SupabaseIcon } from "@/components/icons/skills/supabase-icon";

export function BottomBar() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-4xl">
        {/* TypeScript */}
        <div className="flex flex-col items-center gap-4">
          <TypescriptIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">TypeScript</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center gap-4">
          <NextjsIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">Next.js</span>
        </div>

        {/* Google Ads API */}
        <div className="flex flex-col items-center gap-4">
          <GoogleAdsIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">GoogleAdsAPI</span>
        </div>

        {/* Meta API */}
        <div className="flex flex-col items-center gap-4">
          <MetaIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">MetaAPI</span>
        </div>

        {/* Supabase */}
        <div className="flex flex-col items-center gap-4">
          <SupabaseIcon className="w-12 h-12" />
          <span className="font-body text-sm font-light text-foreground">Supabase</span>
        </div>
      </div>
    </div>
  );
}