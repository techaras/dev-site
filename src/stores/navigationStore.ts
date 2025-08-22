import { create } from 'zustand';

// Section IDs from the HTML
type SectionId = 'home' | 'how-i-work' | 'case-studies' | 'skills' | 'about-me';

// Navigation item names from the constants
type NavigationItem = "Home" | "How I Work" | "Case Studies" | "Skills" | "About me";

// Mapping from section IDs to navigation item names
const SECTION_TO_NAV_MAP: Record<SectionId, NavigationItem> = {
  'home': "Home",
  'how-i-work': "How I Work",
  'case-studies': "Case Studies",
  'skills': "Skills",
  'about-me': "About me",
};

interface NavigationState {
  activeSection: SectionId | null;
  isNavigating: boolean;
  setActiveSection: (sectionId: SectionId) => void;
  setIsNavigating: (navigating: boolean) => void;
  getActiveNavigationItem: () => NavigationItem | null;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  activeSection: null,
  isNavigating: false,
  
  setActiveSection: (sectionId: SectionId) => {
    set({ activeSection: sectionId });
  },
  
  setIsNavigating: (navigating: boolean) => {
    console.log(`🧭 Navigation state: ${navigating ? 'START' : 'END'}`);
    set({ isNavigating: navigating });
  },
  
  getActiveNavigationItem: () => {
    const { activeSection } = get();
    return activeSection ? SECTION_TO_NAV_MAP[activeSection] : null;
  },
}));

// Export the mapping for use in other components if needed
export { SECTION_TO_NAV_MAP };
export type { SectionId, NavigationItem };