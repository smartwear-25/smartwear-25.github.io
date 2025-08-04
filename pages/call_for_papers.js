import Nav from "../components/Nav";

export default function callForPapers() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <h2 className="pt-2">Call for Papers</h2>
                <div className="text-justify font-sans break-word pb-2">
                    Wearable computing systems and applications have attracted interest from a broad range of interdisciplinary researchers and practitioners for decades. The rapid proliferation of wearable computing—from smartphones, smartwatches, on-skin interfaces, implantables, and to head-mounted immersive platforms—has been driven by technological advances and increasing consumer acceptance. However, despite their growing maturity, several key challenges continue to hinder their adoption in long-term, real-world deployments. These include, but are not limited to, novel hardware and platform design, security and privacy concerns, effective integration of advanced machine learning for on-device intelligence and context awareness, system energy and computational efficiency, and improving user adherence and overall experience.
                </div>
                <div className="text-justify font-sans break-word pb-2">
                    We invite researchers, developers, designers, manufacturers, and users from a wide range of disciplines to exchange novel ideas, innovative solutions, and present preliminary results from real-world case studies in wearable computing. To stimulate research on the most novel topics of wearable computing research, we encourage submissions of work that introduce groundbreaking ideas of wearable computing in concrete application scenarios and demonstrations in areas such as healthcare and wellness, virtual and augmented reality, supportive and collaborative work, education and training, biometrics and security, supporting applications and systems for first responders. Highly disruptive work-in-progress and position papers are also welcome, provided they focus on particularly innovative solutions or applications for wearable computing. All papers shall be forward-looking, describe their relationship to existing work, and shall argue their impact and implications for ongoing or future research.
                </div>
                <div className="text-justify font-sans break-word pb-2">
                    <h2>Topic of Interests</h2>
                    Topics of interest include, but are not limited to:
                    <ul className="list-disc pl-5 mb-1">
                        <li>New platforms and hardware designs for wearable systems and applications</li>
                        <li>Innovative form factors of wearables such as glasses, earables, rings, textiles, on-skin interfaces, and personal protective equipment</li>
                        <li>Applications and use-case of wearable technologies interpreted broadly, including healthcare; sports; entertainment; education; virtual and augmented reality; collaborative work; research on behavior, psychology, and cognition</li>
                        <li>Data analytics, learning algorithms, data modeling, and signal processing for wearable computing</li>
                        <li>User experiences of wearable systems including adherence, engagement, and acceptability</li>
                        <li>Novel sensor technologies enabling and enhancing context-aware sensing</li>
                        <li>Privacy and security issues and associated enhancements for wearable computing</li>
                        <li>Low-power operation, energy management of wearable systems</li>
                        <li>Resource-efficient machine learning for wearable systems</li>
                    </ul>
                </div>
                <h2 className="pt-2">Submission Instructions</h2>
                <div className="text-justify">
                    Reviews will be single-blinded. Papers should neither have been published elsewhere nor being currently under review by another conference or journal. Papers should contain original material, namely, material that has not been previously published or currently submitted for consideration elsewhere. Prospective authors are encouraged to submit a single PDF file with all fonts embedded, using the ACM conference proceedings format. (Use the same PDF{" "}
                    <a className="text-red-500 no-underline" href="https://sigmobile.org/mobicom/2025/cfp.html">
                        formatting guidelines
                    </a>
                    {" "}as the main conference.) Paper length is limited to six (6) pages (two-column, 10-point format) including references, figures, etc. Papers must include the author names and affiliations for single-blind peer reviewing by the program committee. Authors of accepted papers are expected to present their papers at the workshop.
                </div>
                <div className="text-justify font-sans break-word pb-2">
                    <h2 className="pt-2">Important Dates (Tentative)</h2>
                      <ul className="list-disc pl-5">
                        <li>Submission Deadline: <span className="font-bold">August 15, 2025</span></li>
                        <li>Acceptance Notification: <span className="font-bold">September 1, 2025</span></li>
                        <li>Camera Ready Due: <span className="font-bold">September 8, 2025</span></li>
                        <li>Workshop Date: <span className="font-bold">November 8, 2025</span></li>
                      </ul>
                </div>
            </div>
        </div>
    );
}
