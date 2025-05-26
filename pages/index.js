import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <h2 className="pt-2">Motivation and Rationale</h2>
                <div className="text-justify font-sans break-word pb-2">
                    Wearable computing systems and applications have attracted interest from a broad range of interdisciplinary researchers and practitioners
                    for decades. The rapid proliferation of wearable computing—from smartphones,
                    smartwatches, on-skin interfaces, implantables, and to head-mounted immersive platforms—has been driven by technological advances and increasing consumer acceptance. However, despite their growing maturity, several key challenges
                    continue to hinder their adoption in long-term, real-world deployments. These include, but are not limited to, novel hardware and platform design, security and privacy concerns, effective integration of advanced machine learning
                    for on-device intelligence and context awareness, system energy and computational efficiency,
                    and improving user adherence and overall experience.
                </div>
                <Footer />
            </div>
        </div>
    );
}