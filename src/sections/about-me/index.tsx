import { useState, useEffect } from 'react';
import { SimpleTextCard } from './simple-text-card';
import { AchievementCard } from './achievement-card';
import { TrustIndicator } from './trust-indicator';
import { QuoteCard } from './quote-card';
import { ExperienceSection } from './experience-section';
import { ProfileSection } from './profile-section';
import { FeatureCard } from './feature-card';
import { AvailabilityCard } from './availability-card';

// Import SVG assets
import zapIcon from '../../assets/zapIcon.svg';
import rocketIcon from '../../assets/rocketIcon.svg';

export function AboutMe() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1381);
    };

    // Check initial size
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isLargeScreen) {
    // Original 5x6 bento grid layout for screens >= 1381px
    return (
      <section 
        id="about-me" 
        className="py-20 px-6 md:px-12 lg:px-16"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* 5x6 Bento Grid */}
          <div className="grid grid-cols-5 gap-4">

            {/* Column 1, Row 1 - Streamline Processes */}
            <SimpleTextCard text="Streamline Processes" />

            {/* Column 2, Rows 1-2 - AI Forge */}
            <AchievementCard 
              title={<>AI Forge<br />Cohort 5<br />Alumnus</>}
              description="12 out of 500+"
              className="row-span-2"
            />

            {/* Column 3, Rows 1-2 - AI Patent */}
            <AchievementCard 
              title={<>AI Patent<br />Winner<br />2023</>}
              description="IP Hatch Winner 2023"
              className="row-span-2"
            />

            {/* Column 4, Rows 1-2 - Sky Labs */}
            <AchievementCard 
              title={<>Sky Labs<br />Finalist<br />2022</>}
              description="18 out of 250+"
              className="row-span-2"
            />

            {/* Column 5, Rows 1-3 - Business-First Tech Leader */}
            <QuoteCard />

            {/* Column 1, Row 2 - Trusted by AccuraCast */}
            <TrustIndicator />

            {/* Column 1, Rows 3-6 - Experience */}
            <ExperienceSection />

            {/* Columns 2-4, Rows 3-5 - Image and Bio */}
            <ProfileSection />

            {/* Column 5, Row 4 - Scalable solutions */}
            <FeatureCard 
              icon={zapIcon} 
              text={<>Scalable<br/>Solutions</>}
              altText="Scalable solutions"
              variant="text-left-icon-right"
            />

            {/* Column 5, Row 5 - Prototype to Production */}
            <FeatureCard 
              icon={rocketIcon} 
              text={<>Prototype<br/>to Production</>}
              altText="Prototype to Production"
              variant="text-right-icon-left"
            />

            {/* Columns 2-4, Row 6 - Accepting 2 new clients */}
            <AvailabilityCard />

            {/* Column 5, Row 6 - Enterprise Compliance Standards */}
            <SimpleTextCard text="Enterprise Compliance Standards" />
            
          </div>
        </div>
      </section>
    );
  }

  // Compact layout for screens < 1381px
  return (
    <section 
      id="about-me" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          
          {/* Row 1: 3 AchievementCards */}
          <div className="grid grid-cols-3 gap-4">
            <AchievementCard 
              title={<>AI Forge<br />Cohort 5<br />Alumnus</>}
              description="12 out of 500+"
            />
            <AchievementCard 
              title={<>AI Patent<br />Winner<br />2023</>}
              description="IP Hatch Winner 2023"
            />
            <AchievementCard 
              title={<>Sky Labs<br />Finalist<br />2022</>}
              description="18 out of 250+"
            />
          </div>

          {/* Row 2: ProfileSection */}
          <div className="w-full">
            <ProfileSection />
          </div>

          {/* Row 3: 2 FeatureCards + 1 SimpleTextCard */}
          <div className="flex flex-col gap-4">
            {/* FeatureCards row */}
            <div className="grid grid-cols-2 [@media(min-width:1175px)]:grid-cols-3 gap-4">
              <FeatureCard 
                icon={rocketIcon} 
                text={<>Prototype to<br/>Production</>}
                altText="Prototype to Production"
                variant="text-right-icon-left"
              />
              <FeatureCard 
                icon={zapIcon} 
                text={<>Scalable<br/>Solutions</>}
                altText="Scalable solutions"
                variant="text-left-icon-right"
              />
              {/* SimpleTextCard only shows in this row on screens >= 1175px */}
              <div className="hidden [@media(min-width:1175px)]:block">
                <SimpleTextCard text="Enterprise Compliance Standards" />
              </div>
            </div>
            
            {/* SimpleTextCard on its own row for screens < 1175px */}
            <div className="[@media(min-width:1175px)]:hidden">
              <SimpleTextCard text="Enterprise Compliance Standards" />
            </div>
          </div>

          {/* Row 4: Complex 2x3 grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {/* Column 1, Row 1 */}
            <div className="col-start-1 row-start-1">
              <SimpleTextCard text="Streamline Processes" />
            </div>
            
            {/* Column 1, Row 2 */}
            <div className="col-start-1 row-start-2">
              <TrustIndicator />
            </div>
            
            {/* Columns 2-3, Rows 1-2 */}
            <div className="col-start-2 col-span-2 row-start-1 row-span-2">
              <QuoteCard />
            </div>
          </div>

          {/* Row 5: ExperienceSection */}
          <div className="w-full">
            <ExperienceSection />
          </div>

        </div>
      </div>
    </section>
  );
}