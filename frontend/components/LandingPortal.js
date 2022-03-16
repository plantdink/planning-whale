import React from 'react';
import ShdIconSVG from './ShdIconSVG';
import { LandingStyles, TypingStyles } from './styles/LandingPortalStyles';

export default function LandingPortal() {
  return (
    <>
      <LandingStyles>
        <div className="landing-content">
          <div className="typing-wrapper">
            <TypingStyles>
              <div className="typing-text">
                Agent, welcome to the Strategic Homeland Division.
              </div>
            </TypingStyles>
          </div>

          <div className="shd-icon">
            <ShdIconSVG />
          </div>
        </div>
      </LandingStyles>
    </>
  );
}
