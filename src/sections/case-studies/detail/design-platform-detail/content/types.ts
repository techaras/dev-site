export interface ContentSection {
    id: string;
    title: string;
    content: string;
    subsections?: ContentSubsection[];
  }
  
  export interface ContentSubsection {
    title: string;
    content: string;
  }
  
  export interface CaseStudyContent {
    sections: ContentSection[];
  }