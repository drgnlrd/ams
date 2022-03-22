import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3 " style= {{backgroundColor: "#f2f2f2",color:"black"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#" style= {{backgroundColor: "#f2f2f2",color:"black"}}> Ad Management Platform </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
