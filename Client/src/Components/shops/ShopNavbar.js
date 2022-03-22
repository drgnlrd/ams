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
import { useSelector, useDispatch } from 'react-redux';
import { storeUserData, resetUser } from '../../redux/user/user.actions';

const ShopNavbar = () => {
  
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

    
    return (
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Brand</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="">
                <a
                  href="/Shophome"
                  onClick="/Shophome"
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/shopPendingRequests">
                Pending Requests
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/shopconsignments">Consignments</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/shopCurrentConsignments">
                Current Consignments
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/shopConsignmentsHistory">History</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="">
                <a
                  href="##"
                  onClick={() => {
                    localStorage.clear();
                    dispatch(resetUser());
                    window.location.href = "/";
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

export default ShopNavbar;
