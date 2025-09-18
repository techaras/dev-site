import { AchievementCard } from '../about-me/achievement-card';
import { ProfileSection } from '../about-me/profile-section';

export function AboutMeMobile() {
  return (
    <section 
      id="about-me-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top row: 2 achievement cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AchievementCard 
            title={<>Sky Labs<br />Finalist<br />2022</>}
            description="18 out of 250+"
          />
          <AchievementCard 
            title={<>AI Patent<br />Winner<br />2023</>}
            description="IP Hatch Winner"
          />
        </div>

        {/* Bottom row: 1 achievement card */}
        <div className="grid grid-cols-1 mb-6">
          <AchievementCard 
            title={<>AI Forge Cohort 5 Alumnus</>}
            description="12 out of 500+"
          />
        </div>

        {/* Profile Section */}
        <div className="w-full">
          <ProfileSection />
        </div>
      </div>
    </section>
  );
}