import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SectionContainer } from '../Layout';

const Header = ({isJoined, name}) => {
  const condition = isJoined
  return(
    <>
      <SectionContainer className="bg-dark d-flex align-items-center">
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
  
          {condition
            ? 
              <div className="dropdown ms-auto">
              <button className="btn btn-responsive dropdown-toggle " type="button" data-toggle="dropdown">
                Welcome {name} ⬇
              </button>
              <ul className="dropdown-menu bg-primary" style={{borderRadius:'0px'}}>
                <li><Link className="dropdown-item" to="/members">Members Area</Link></li>
                <li><Link className="dropdown-item" to="/">Check your rank</Link></li>
                <li><Link className="dropdown-item" to="/">Change Password</Link></li>
                <li><Link className="dropdown-item" to="/">Sign out</Link></li>
              </ul>
            </div>
            : <></>
          }

      </SectionContainer>
      <div className="wl-header-hr" />
    </>
  );
}


export default Header;

Header.propTypes = {
  isJoined: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
