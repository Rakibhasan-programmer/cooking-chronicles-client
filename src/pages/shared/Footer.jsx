import React from "react";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 container-fluid bg-dark pt-5 pb-3 text-white">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pb-3">
                <img src={logo} className="img-fluid" style={{width: "15rem"}} alt="" />
              </div>
              <p>
                We are a Bangladesh based food agency.
              </p>
              <p>
                <span className="d-block">
                  Middle Badda, Dhaka 1212, Bangladesh 
                </span>
                <span className="d-block">Phone: +098988998 98</span>
                <span className="d-block">Email: info@cookingchronicles.com</span>
              </p>
            </div>
            <div className="col-md-6 col-lg-2">
              <h5 className="pb-4">Our Services</h5>
              <p>
                <a className="text-decoration-none text-white" href="">
                  Master Chef
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="">
                  Food Delivery
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="">
                  Food Safety
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="">
                  Hygenic
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-2">
              <h5 className="pb-4">Important Links</h5>
              <p>
                <a className="text-decoration-none text-white" href="#">
                  About us
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="#">
                  Meet the team
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="#">
                  Partner
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="#">
                  Pricing Plan
                </a>
              </p>
              <p>
                <a className="text-decoration-none text-white" href="#">
                  Career
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5 className="pb-4">Join Our Newsletter</h5>
              <p>Get Updates Always</p>
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary text-white"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center fw-light pt-5">
          All rights reserved | &copy; 2023 cooking chronicles
        </p>
      </footer>
    </>
  );
};

export default Footer;
