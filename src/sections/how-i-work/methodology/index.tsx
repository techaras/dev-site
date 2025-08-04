import { EmailIcon } from "@/components/icons/methodology/email-icon";
import { VideoIcon } from "@/components/icons/methodology/video-icon";
import { TeamsIcon } from "@/components/icons/methodology/teams-icon";
import { SlackIcon } from "@/components/icons/methodology/slack-icon";
import { AsanaIcon } from "@/components/icons/methodology/asana-icon";
import { TrelloIcon } from "@/components/icons/methodology/trello-icon";

export function Methodology() {
  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      <h3 className="font-heading text-xl mb-2">Methodology</h3>
      <p className="font-body text-sm text-[#b3b3b3] mb-7">
        I use lightweight Agile delivery designed for SMEs and I'm available in
      </p>
      
      {/* 3x2 Grid of Icons */}
      <div className="grid grid-cols-3 gap-4 mb-4 flex-1 content-center">
        {/* First Row */}
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <EmailIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Email</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <VideoIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Video</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-xl hover:border-[#555759] transition-colors duration-300">
          <TeamsIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Teams</span>
        </div>
        
        {/* Second Row */}
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <SlackIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Slack</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <AsanaIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Asana</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full h-22 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <TrelloIcon className="w-9 h-9" />
          <span className="font-body text-sm text-[#b3b3b3] font-light">Trello</span>
        </div>
      </div>
      
      {/* Request Channel Button */}
      <div className="mt-4">
        <button className="w-full px-6 py-2 border border-[#353739] rounded-full font-heading text-sm text-[#f2f2f2] hover:border-[#555759] transition-colors duration-300">
          Request Channel
        </button>
      </div>
    </div>
  );
}
