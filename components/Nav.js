import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../public/banner_hongkong.jpg";
// import banner from "../public/banner.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Navigation() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Head>
                            <title>SmartWear 2025 | ACM MobiCom 2025</title>
                        </Head>
                        <Link href="/">
                            <a className="no-underline text-xl text-white mr-4">SmartWear</a>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link href="/">
                                    <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">Home</a>
                                </Link>
                                <Link href="/call_for_papers">
                                    <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">Call for papers</a>
                                </Link>
                                <Link href="/committees">
                                    <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">Committees</a>
                                </Link>
                                {/* <Link href="/technical_program">
                                    <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">Program</a>
                                </Link> */}
                                <Link href="/paper_submission">
                                    <a className="no-underline px-2 py-2 text-gray-400 hover:text-gray-200">Paper Submission</a>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="banner relative z-0" style={{ height: "20vw" }}>
                    <Image className="object-cover" alt="banner" layout="fill" src={banner} />
                    <div className="leading-tight object-contain overflow-hidden backdrop-blur-sm relative top-1/3 text-white z-1 mx-auto text-center align-middle" style={{ height: "12vw", width: "50vw" }}>
                        <p className="mb-0" style={{ fontSize: "2vw" }}>SmartWear 2025</p>
                        <p className="mb-0" style={{ fontSize: "1.5vw" }}>The 3rd Workshop on Smart Wearable Systems and Applications</p>
                        <p className="mb-0" style={{ fontSize: "1.2vw" }}>In Conjunction with MobiCom 2025</p>
                        <p className="mb-0" style={{ fontSize: "1.5vw" }}>November 8, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;