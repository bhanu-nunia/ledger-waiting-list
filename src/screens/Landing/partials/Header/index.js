import React from 'react';
import { SectionContainer } from '../Layout';

const Header = () => (
  <>
    <SectionContainer className="bg-dark">
      <div className="wl-header py-4">
        
        <div>
          <button
            className="btn btn-responsive"
            type="button"
            data-toggle="modal"
            data-target="#modal">
            Join waitlist
          </button>
        </div>
      </div>
    </SectionContainer>
    <div className="wl-header-hr" />
  </>
);

export default Header;
