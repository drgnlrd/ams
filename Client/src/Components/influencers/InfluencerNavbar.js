import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { storeUserData, resetUser } from "../../redux/user/user.actions";

const InfluencerNavbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

    return (
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Influencer</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/infHome">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/infProfilelook">Profile Look</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/InfEditProfile">Edit Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Consignments">Consignments</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/currentConsignments">
                Current Consignments
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/infconsignmentHistory">History</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="">
                <a
                  href="##"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                    dispatch(resetUser());
                  }}
                >
                  Logout
                </a>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
}

export default InfluencerNavbar;
