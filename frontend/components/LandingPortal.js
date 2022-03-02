import React from 'react';
import ReactVivus from 'react-vivus';
import { TypingWrapper } from './styles/LandingPortalStyles';

const svgOutline =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1645770225/agent-field-manual/621875f0ee33360e6ea165fd.svg';

const svgColoured =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1646026058/agent-field-manual/621c5d49d12c2d09fee24f2d.svg';

export default function LandingPortal() {
  return (
    <>
      <TypingWrapper>
        <div className="landing-content">
          <div className="typing-wrapper">
            <div className="typing-demo">
              Agent, welcome to the Strategic Homeland Division.
            </div>
          </div>

          <div className="img-wrapper">
            <ReactVivus
              id="foo"
              option={{
                file: svgOutline,
                duration: 700,
                animTimingFunction: 'Ease in out',
                type: 'oneByOne',
                // onReady: console.log,
              }}
              style={{ height: '100%', width: '100%' }}
              // callback={console.log}
            />
          </div>

          <div className="img-coloured">
            <img
              src={svgColoured}
              alt="Coloured SHD logo"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </TypingWrapper>
    </>
  );
}
