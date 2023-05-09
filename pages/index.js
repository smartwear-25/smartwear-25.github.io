import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <h2 className="pt-2">Motivation and Rationale</h2>
        <div className="text-justify font-sans break-word pb-2">
          Wearable computing systems and applications have been attracting
          researchers and practitioners from a mix of interdisciplinary
          disciplines for many decades. The proliferation of wearable computing
          from smartphone and smartwatch based systems to on-skin interfaces and
          implantables have been fuelled by the advances in the underpinning
          technologies and the growing consumer acceptance. However, despite the
          fast growing maturity of wearable computing, there are still many
          important research challenges that need to be addressed, including but
          not limited to novel hardware and platform design, energy and
          computing efficiency, security and privacy, adherence and user
          experience. The goal of this workshop is to provide a forum for an
          interdisciplinary mix of researchers, developers, designers,
          manufacturers, and users to exchange novel ideas, innovative
          solutions, and present results from real-world case studies in the
          area of wearable computing.
        </div>
        <Footer />
      </div>
    </>
  );
}
