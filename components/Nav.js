import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../public/banner_optimized.jpg";
// import banner from "../public/banner.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Navigation() {
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Head>
              <title>SmartWear 2022 | ACM MobiCom 2022</title>
            </Head>
            <Link href="/" className="no-underline text-xl text-white mr-4">
              SmartWear
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">
                    Home
                <Link href="/call_for_papers">
                  <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">
                    Call for papers
                  </a>
                </Link>
                </Link>
                <Link href="/committees" className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">
                  Committees
                </Link>
                <Link href="/technical_program" className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">
                  Program
                </Link>
                <Link href="/paper_submission" className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">
                  Paper Submission
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="banner relative z-0" style={{ height: "25vw" }}>
          <Image
            className="object-cover"
            alt="banner"
            layout="fill"
            src={banner}
          />
          <div
            className="leading-tight object-contain overflow-hidden backdrop-blur-sm relative top-1/3 text-white z-1 mx-auto text-center align-middle"
            style={{ height: "15vw", width: "50vw" }}
          >
            <p className="mb-0" style={{ fontSize: "2vw" }}>
              SmartWear 2023
            </p>
            <p className="mb-0" style={{ fontSize: "1.5vw" }}>
              Workshop on Smart Wearable Systems and Applications
            </p>
            <p className="mb-0" style={{ fontSize: "1.2vw" }}>
              In Conjunction with MobiCom 2023
            </p>
            <p className="mb-0 " style={{ fontSize: "1.5vw" }}>
              2-6 Oct 2023, Madrid, Spain
            </p>
            <p className="mb-0 font-serif" style={{ fontSize: "1.4vw" }}>
              ( SmartWear will run as a hybrid event, which provides an option
              for presenters and participants to attend the workshop in person )
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
