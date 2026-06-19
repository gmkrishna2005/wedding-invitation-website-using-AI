'use client';

import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import { WeddingCeremony, ReceptionSection, NaluguSection, PushkaramSection } from '@/components/EventSections';
import VenueSection from '@/components/VenueSection';
import FamilySection from '@/components/FamilySection';
import ContactSection from '@/components/ContactSection';
import ClosingSection from '@/components/ClosingSection';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingPetals from '@/components/FloatingPetals';
import { GoldDivider } from '@/components/SVGComponents';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowContent(true);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      {showContent && (
        <main className="flex-1">
          <FloatingPetals />
          <MusicPlayer />

          <HeroSection />

          {/* Decorative section divider */}
          <div className="py-4">
            <GoldDivider wide />
          </div>

          <InvitationSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <WeddingCeremony />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <ReceptionSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <NaluguSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <PushkaramSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <VenueSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <FamilySection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <ContactSection />

          <div className="py-4">
            <GoldDivider wide />
          </div>

          <ClosingSection />
        </main>
      )}
    </>
  );
}
