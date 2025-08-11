export interface TechStackItem {
    icon: React.ReactNode;
    name: string;
  }
  
  export interface ProjectSection {
    title: string;
    items: string[];
  }
  
  export interface ProjectData {
    title: string;
    description: string;
    sections: ProjectSection[];
  }
  
  export interface CaseStudyData {
    projectData: ProjectData;
    techStack: TechStackItem[];
  }