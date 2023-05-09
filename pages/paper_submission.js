import Nav from "../components/Nav";
import Link from "next/link";

export default function paperSumisstion() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <div className="text-justify font-sans break-word pb-2 pt-2 inline">
          <h2 className="pt-2">Submission Instructions</h2>
          <p className="pt-2 justify-center text-left text-lg text-red-500 ">TBD</p>
          {/*<div>
            Demo proposals must be accompanied with an additional 1-page
            description of the precise setup and requirements (the 1-page setup
            description will not be published in the proceedings). Reviews will
            be single-blinded. Papers should neither have been published
            elsewhere nor being currently under review by another conference or
            journal. Papers should contain original material, namely, material
            that has not been previously published or currently submitted for
            consideration elsewhere. Prospective authors are encouraged to
            submit a single PDF file with all fonts embedded, using the ACM
            conference proceedings format. (Use the same PDF{" "}
            <a
              className="text-red-500 no-underline"
              href="https://www.sigmobile.org/mobicom/2022/cfp.html"
            >
              formatting guidelines
            </a>{" "}
            as the main conference.) Paper length is limited to six (6) pages
            (two-column, 10-point format) including references, figures, etc.
            Papers must include the author names and affiliations for
            single-blind peer reviewing by the program committee. Authors of
            accepted papers are expected to present their papers at the
            workshop.
          </div>*/}
        </div>
        <div className="text-justify font-sans break-word pb-2 pt-1">
          <h2>Submission Website</h2>
          <p className="pt-2 justify-center text-left text-lg text-red-500 ">TBD</p>
          {/*<a
            className="text-red-500 no-underline"
            href="https://smartwear2022.hotcrp.com/"
          >
            SmartWear 2023 on HotCRP
          </a>*/}
        </div>
        <div className="text-justify font-sans break-word pb-2">
          <h2 className="pt-2">Important Dates</h2>
          <p className="pt-2 justify-center text-left text-lg text-red-500 ">TBD</p>
          {/*<ul className="list-disc pl-5">
            <li>Abstract Registration: <span className="font-bold">June 12, 2022</span> </li> 
            {/*<li>
              <s>
                Submission Deadline:{" "}
                <span className="font-bold">June 12, 2023</span>
              </s>
            </li>
            <li>
              Submission Deadline:{" "}
              <span className="font-bold text-red-500">
                <!--Extended to July 7, 2022 -->
              </span>
            </li>
            <li>
                Submission Deadline:{" "}
                <span className="font-bold">June 19, 2023</span>
            </li>
            <li>
              Notification of acceptance:{" "}
              <span className="font-bold">July 10, 2023</span>
            </li>
            <li>
              Camera Ready Due:{" "}
              <span className="font-bold">July 31, 2023</span>
            </li>
            <li>
              Workshop: <span className="font-bold">October 6, 2023</span>
            </li>
          </ul>*/}
        </div>
      </div>
    </>
  );
}
