import Nav from "../components/Nav";
import Image from "next/image";
import moment from "moment-timezone";
import Footer from "../components/Footer";
import tw from "tailwind-styled-components";
import speaker1 from "../public/Subhas.jpg";
import googlelogo from "../public/icons8-google-scholar.svg";
import orcidlogo from "../public/icons8-orcid.svg";
import bloglogo from "../public/icons8-google-docs.svg";
import panelmember1 from "../public/HH4.jpeg";
import panelmember2 from "../public/nabil.jpeg";
import panelmember3 from "../public/glxing_300dpi-HQ-photo.jpg";
import speaker2 from "../public/Moustafa.jpeg";

const Time = tw.div` col-span-2 text-center  grid place-items-center`;
const LocalTime = tw.div` col-span-1 text-center  grid place-items-center`;
const Contetnt = tw.div` col-span-10 pl-4`;
const PaperTitle = tw.span`font-bold`;
const PaperAuthors = tw.span`italic font-serif`;
const BasicBlock = tw.div`grid col-span-12 grid-cols-12`;
const Emph = tw.span``;
// const ColorList = [
//   "bg-[#ff99c8]",
//   "bg-[#fcf6bd]",
//   "bg-[#d0f4de]",
//   "bg-[#a9def9]",
//   "bg-[#e4c1f9]",
// ];
const ColorList = [
  "bg-[#bfdbfe]",
  "bg-[#fde68a]",
  "bg-[#e9d5ff]",
  "bg-[#fecaca]",
  "bg-[#bbf7d0]",
];

const logosize = 36;

export default function technicalProgram() {
  const convertTime = (time, local = false) => {
    var testDateUtc = moment.tz(time, "Australia/Sydney");
    var localDate = moment(testDateUtc).local();
    // "YYYY-MM-DD HH:mm:ss"
    if (local) {
      return testDateUtc.format("HH:mm");
    } else {
      return localDate.format("HH:mm");
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <p className="pt-2 justify-center text-center text-lg text-red-500 ">
            All times are in Central European Summer Time (CEST).
        </p>
  
  
        {/* <p className="bold text-xl text-center pt-0">
          Online Zoom link:{" "}
          <a href="https://unsw.zoom.us/j/89330936294">
            https://unsw.zoom.us/j/89330936294
          </a>
          <br />
          The password can be found in the email you received.
        </p> */}
      </div>

  <div className="container mx-auto">
        <p className="pt-2 text-3xl font-serif">Sechedule</p>
      </div>
      <div className="container grid grid-cols-12 px-0 ">
        <BasicBlock className={`${ColorList[0]}`}>
          <Time>
            <span className="font-bold">Time</span>
          </Time>
          <Contetnt>
            <span className="font-bold">Event</span>
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[1]}`}>
          <Time>14:00 - 14:10</Time>
          <Contetnt>
            Welcome and Opening Remarks from Workshop Organizers
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[2]}`}>
          <Time>14:10 - 15:00</Time>
          <Contetnt>
            Keynote 1 [50mins: 35~40min talk + 10~15min Q&A]
            <br />
            Topic:{" "}
            <PaperTitle>TBD</PaperTitle>
            <br />
            Keynote Speaker: TBD
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[4]}`}>
          <Time>15:00 - 16:00</Time>
          <Contetnt>
            Paper Session 1
            <br />
            <ul className="list-disc mb-0">
              <li className="">
                <PaperTitle>
                  Z-Pose: Continuous 3D Hand Pose Tracking Using Single-Point Bio-Impendance Sensing on a Ring
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Anandghan Waghmare, Ishan Chatterjee, Shwetak Patel (University of Washington)
                </PaperAuthors>
              </li>
              <li className="">
                <PaperTitle>
                  Yawning Detection using Earphone Inertial Measurement Units
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Jacob Brown, Yang Liu, Cecilia Mascolo (University of Cambridge)
                </PaperAuthors>
              </li>
              <li className="">
                <PaperTitle>
                  Optimizing User Experience in Wearable Cognitive Assistance through Model Specialization
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Chanh Nguyen, Mahadev Satyanarayanan (Carnegie Mellon University)
                </PaperAuthors>
              </li>
            </ul>
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[3]}`}>
          <Time>16:00 - 16:30</Time>
          <Contetnt>Coffee Break</Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[4]}`}>
          <Time>16:30 - 17:10</Time>
          <Contetnt>
            Paper Session 2
            <br />
            <ul className="list-disc mb-0">
              <li className="">
                <PaperTitle>
                  Hyper-Accelerated Learning for Brain-Computer Interfaces via Partial Target-Aware Optimal Transport
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Ekansh Gupta, Cheng-Yeh Chen, Raghupathy Sivakumar (Georgia Institute of Technology)
                </PaperAuthors>
              </li>
              <li className="">
                <PaperTitle>
                  Aggressive SRAM Voltage Scaling and Error Mitigation for Approximate DNN Inference 
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Wootack Kim, Minkyu Shim, Hyunwoo Jung, Youngki Lee (Seoul National University)
                </PaperAuthors>
              </li>
            </ul>

          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[1]}`}>
          <Time>17:10 - 17:20</Time>
          <Contetnt>Closing Remarks</Contetnt>
        </BasicBlock>
        <br />
      </div>


      {/*
      <div className="container mx-auto">
        <p className="pt-2 text-3xl font-serif">Sechedule</p>
      </div>
      <div className="container grid grid-cols-12 px-0 ">
        <BasicBlock className={`${ColorList[0]}`}>
          <Time>
            <span className="font-bold">Time</span>
          </Time>
          <Contetnt>
            <span className="font-bold">Event</span>
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[1]}`}>
          <Time>09:00 - 09:10</Time>
          <Contetnt>
            Welcome and Opening Remarks from Workshop Organizers
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[2]}`}>
          <Time>09:10 - 10:00</Time>
          <Contetnt>
            Keynote 1 [50mins: 35~40min talk + 10~15min Q&A]
            <br />
            Topic:{" "}
            <PaperTitle>Trends for Wearable and Medical Devices</PaperTitle>
            <br />
            Keynote speaker: Prof. Subhas Mukhopadhyay, FIEEE, Macquarie
            University
            <br />
            Session Chair: Mahbub Hassan
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[3]}`}>
          <Time>10:00 - 10:30</Time>
          <Contetnt>Coffee Break</Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[4]}`}>
          <Time>10:30 - 12:00</Time>
          <Contetnt>
            Technical Paper Session
            <br />
            Session Chair: Mahbub Hassan
            <ul className="list-disc mb-0">
              <li className="">
                <PaperTitle>
                  <span className="bg-blue-500 text-white rounded-xl px-2 mr-1">
                    Best Paper!
                  </span>
                  Equinox: Exploring Naturalistic Distortions of Time Perception
                </PaperTitle>
                <br />
                <PaperAuthors>
                  David Ramsay, Joseph A. Paradiso (Responsive Environments, MIT
                  Media Lab, USA)
                </PaperAuthors>
              </li>
              <li className="">
                <PaperTitle>
                  Radio Signal Strength Indication Augmentation for One-Shot
                  Learning in Indoor Localisation
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Thanaphon Suwannaphong, Ryan McConville, Ian Craddock
                  (University of Bristol, UK)
                </PaperAuthors>
              </li>
              <li className="">
                <PaperTitle>
                  TagTeam: Towards Wearable-Assisted, Implicit Guidance for
                  Human-Drone Teams
                </PaperTitle>
                <br />
                <PaperAuthors>
                  Kasthuri Jayarajah, Aryya Gangopadhyay (University of
                  Maryland, Baltimore County, USA), Nicholas Waytowich (US Army
                  Research Lab, USA)
                </PaperAuthors>
              </li>
            </ul>
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[3]}`}>
          <Time>12:00 - 13:30</Time>
          <Contetnt>Lunch Break</Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[2]}`}>
          <Time>14:00 - 14:50</Time>
          <Contetnt>
            Keynote 2 [50mins: 35~40min talk + 10~15min Q&A]
            <br />
            Topic:{" "}
            <PaperTitle>
              Sensor-less Energy-free Sensing: The Future of Ubiquitous
              Context-Awareness for Wearable Devices
            </PaperTitle>
            <br />
            Keynote speaker: Prof. Moustafa Youssef, FIEEE, FACM, The American
            University in Cairo
            <br />
            Session Chair: Guohao Lan
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[3]}`}>
          <Time>15:00 - 15:30</Time>
          <Contetnt>Coffee Break</Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[4]}`}>
          <Time>15:30 - 16:30</Time>
          <Contetnt>
            Panel Discussion
            <br />
            Panel Topic:{" "}
            <PaperTitle>
              How the smart wearables will shape the future of the healthcare
              industry
            </PaperTitle>
            <br />
            Panel members:
            <ul className="list-disc mb-0">
              <li>
                Prof. Guoliang Xing, FIEEE, Chinese University of Hong Kong
              </li>
              <li>Dr. Hassan Habibi Gharakheili, CTO of CyAmast</li>
              <li>Prof. Nabil Alshurafa, Northwestern University</li>
            </ul>
            Moderator: Mahbub Hassan
          </Contetnt>
        </BasicBlock>
        <BasicBlock className={`${ColorList[1]}`}>
          <Time>16:30 - 16:40</Time>
          <Contetnt>Best Paper Award and Closing Remarks</Contetnt>
        </BasicBlock>
      </div>
      <div className="container mx-auto">
        <p className="pt-2 text-3xl font-serif">Best Paper Award</p>
        <p className="font-mono text-justify">
          <span className="text-red-500">Note: </span>SmartWear Workshop
          Organizing Committee will select <Emph>the best paper </Emph>after the
          presentations. The best paper will be awarded a certificate and a cash
          prize worth <Emph>USD 500</Emph> sponsored by the School of Computer
          Science and Engineering (CSE) of the University of New South Wales
          (UNSW).
        </p>
      </div>
      <div className="container mx-auto">
        <p className="pt-2 text-3xl font-serif">Keynote Speakers</p>
      </div>
      <div className="container grid grid-cols-12 ">
        <div className="col-span-12">
          <p className="text-2xl font-bold">
            Trends for Wearable and Medical Devices
          </p>
        </div>
        <div className="col-span-12 md:col-span-2">
          <div className="text-center">
            <Image alt="Subhas" src={speaker1}></Image>
          </div>
          <p className="text-xl font-serif text-center  md:text-base lg:text-xl">
            Subhas Mukhopadhyay
          </p>
          <div className="text-center">
            <a
              href="https://scholar.google.com.au/citations?user=8p-BvWIAAAAJ&hl=en"
              alt="google scholar"
            >
              <Image
                alt="google scholar"
                src={googlelogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
            <a href="https://orcid.org/0000-0002-8600-5907" alt="Subhas">
              <Image
                alt="Subhas"
                src={orcidlogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
            <a
              href="https://researchers.mq.edu.au/en/persons/subhas-mukhopadhyay"
              alt="personal page"
            >
              <Image
                alt="personal page"
                src={bloglogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <p className="pl-2 text-justify mb-2">
            An increase in world population along with a signiﬁcant aging
            portion is forcing rapid rises in healthcare costs. The healthcare
            system is going through a transformation in which continuous
            monitoring of inhabitants is possible even without hospitalization.
            The advancement of sensing technologies, embedded systems, wireless
            communication technologies, nano-technologies, and miniaturization
            makes it possible to develop smart medical systems to monitor
            activities of human beings continuously. Wearable sensors monitor
            physiological parameters continuously along with detect other
            symptoms such as any abnormal and/or unforeseen situations which
            need immediate attention. Therefore, necessary help can be provided
            in times of dire need. This seminar reviews the latest reported
            systems and the trends on wearable and medical devices including
            implanted sensors to monitor activities of humans and issues to be
            addressed to tackle the challenges.
          </p>
          <p className="pl-2 text-justify">
            <span className="font-bold">Bio: </span>
            Subhas holds a B.E.E. (gold medallist), M.E.E., <Emph>Ph.D. </Emph>
            (India) and <Emph>Doctor of Engineering</Emph> (Japan). He has over
            32 years of teaching, industrial and research experience. Currently
            he is working as a Professor of Mechanical/Electronics Engineering,
            Macquarie University, Australia and is the Discipline Leader of the
            Mechatronics Engineering Degree Programme. Before joining Macquarie
            he worked as Professor of Sensing Technology, Massey University, New
            Zealand. His fields of interest include Smart Sensors and sensing
            technology, instrumentation techniques, wireless sensors and network
            (WSN), Internet of Things (IoT), healthcare, wearbales etc. He has
            supervised over 50 postgraduate students and over 150 Honours
            students. He has examined over 80 postgraduate theses.
            <br /> He has published over <Emph>450</Emph> papers in different
            international journals and conference proceedings, written ten books
            and fifty two book chapters and edited <Emph>eighteen </Emph>
            conference proceedings. He has also edited <Emph>thirty five </Emph>
            books with Springer-Verlag and thirty four journal special issues.
            He has organized over 20 international conferences as either General
            Chairs/co-chairs or Technical Programme Chair. He has delivered
            <Emph> 415</Emph> presentations including keynote, invited, tutorial
            and special lectures.
            <br />
            He is a <Emph>Fellow</Emph> of IEEE (USA), a <Emph>Fellow</Emph> of
            IET (UK), a <Emph>Fellow</Emph> of IETE (India). He is a
            <Emph> Topical Editor</Emph> of IEEE Sensors journal. He is also an
            <Emph> associate</Emph> editor of IEEE Transactions on
            Instrumentation and Measurements and IEEE Transactions on Review of
            Biomedical Engineering. He is a <Emph>Distinguished</Emph> Lecturer
            of the IEEE Sensors Council from 2017 to 2022. He is the
            <Emph> Founding chair</Emph> of the IEEE Sensors Council NSW
            chapter.
          </p>
        </div>
        <div className="col-span-12">
          <p className="text-2xl font-bold">
            Sensor-less Energy-free Sensing: The Future of Ubiquitous
            Context-Awareness for Wearable Devices
          </p>
        </div>
        <div className="col-span-12 md:col-span-2">
          <div className="text-center">
            <Image alt="Subhas" src={speaker2}></Image>
          </div>
          <p className="text-xl font-serif text-center  md:text-base lg:text-xl">
            Moustafa Youssef
          </p>
          <div className="text-center">
            <a
              href="https://scholar.google.com.au/citations?user=r6DUyxsAAAAJ&hl=en"
              alt="google scholar"
            >
              <Image
                alt="google scholar"
                src={googlelogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
            <a href="https://orcid.org/0000-0002-2063-4364" alt="Moustafa">
              <Image
                alt="Moustafa"
                src={orcidlogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
            <a
              href="https://www.aucegypt.edu/fac/moustafa-amin-youssef"
              alt="personal page"
            >
              <Image
                alt="personal page"
                src={bloglogo}
                width={logosize}
                height={logosize}
              ></Image>
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <p className="pl-2 text-justify mb-2">
            With the wide-spread use of wearable devices and their diversity,
            enabling new ways of interacting with them as well as using them as
            ubiquitous sensors to enable smart environments presents both a
            challenge and opportunity. Specifically, many of the wearable
            devices are expected to be limited in capability and run with
            minimal power sources/limited battery. To extend their battery
            lifetime and provide value-added services, we introduce the concepts
            of sensor-less and energy-free sensing, where we can control
            wearables and sense the environment without using any external
            sensors while consuming minimal or no energy. The talk will present
            these exciting concepts as well as practical applications that
            leverage them to enable smart environments.
          </p>
          <p className="pl-2 text-justify">
            <span className="font-bold">Bio: </span>
            Moustafa Youssef is a professor at the American University in Cairo
            and founder & director of the Wireless Research Center of
            Excellence, Egypt. His research interests include mobile wireless
            networks, mobile computing, location determination technologies,
            pervasive computing, and quantum computing. He is an Associate
            Editor for IEEE TMC and ACM TSAS, served as the Lead Guest Editor of
            the IEEE Computer Special Issue on Transformative Technologies and
            an Area Editor of ACM MC2R as well as on the organizing and
            technical committees of numerous prestigious conferences. He is the
            recipient of the 2003 University of Maryland Invention of the Year
            award, the 2010 TWAS-AAS-Microsoft Award for Young Scientists, the
            2013 and 2014 COMESA Innovation Award, the 2013 ACM SIGSpatial GIS
            Conference Best Paper Award, the 2017 Egyptian State Award, multiple
            Google Research Awards, among many others. He is also an IEEE and
            ACM Fellow.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="pt-2 text-3xl font-serif">Panel Members</p>
      </div>
      <div className="container grid grid-cols-3 gap-4 ">
        <div className="col-span-3 md:col-span-1">
          <div className="relative h-64 w-48 m-auto ">
            <Image
              alt="Guoliang Xing"
              src={panelmember3}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <p className="text-xl font-serif text-center">Guoliang Xing</p>
          <p className="mb-2 text-justify">
            <span className="font-bold">Bio: </span>
            Guoliang Xing is currently a Professor of Information Engineering at
            The Chinese University of Hong Kong. Previously, he was a tenured
            faculty member at Michigan State University. He received the D.Sc.
            degree from Washington University in St. Louis, in 2006. He received
            three Best Paper Awards and six Best Paper Nominations at leading
            international conferences. His research interests include Internet
            of Things (IoT), Smart Health, Autonomous Driving and Cyber-Physical
            Systems. He has led several multi-disciplinary research projects on
            smart health systems for Digital biomarkers of Alzheimer’s Disease,
            activity recognition, family wellness, and sleep/breathing
            monitoring. Several mobile health technologies developed in his lab
            won Best App Awards at the MobiCom conference and were successfully
            transferred to the industry. He received the U.S. NSF CAREER Award
            in 2010 and the Withrow Distinguished Faculty Award from Michigan
            State University in 2014. He has published 150+ papers which have
            been cited for 10,000+. He is a Fellow of IEEE.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="relative h-64 w-48 m-auto ">
            <Image
              alt="Hassan Habibi Gharakheili"
              src={panelmember1}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <p className="text-xl font-serif text-center">
            Hassan Habibi Gharakheili
          </p>
          <p className="mb-2 text-justify">
            <span className="font-bold">Bio: </span>
            Hassan Habibi Gharakheili is the CTO and a co-founder of CyAmast, a
            UNSW spin-out that offers a software product for securing IoT
            devices at the network level. He is also a senior lecturer at UNSW
            School of Electrical Engineering and Telecommunications. His current
            research primarily focuses on cybersecurity of connected IoTs,
            learning-based computer systems, and programmable networks.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="relative h-64 w-48 m-auto ">
            <Image
              alt="Nabil Alshurafa"
              src={panelmember2}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <p className="text-xl font-serif text-center">Nabil Alshurafa</p>
          <p className="mb-2 text-justify">
            <span className="font-bold">Bio: </span>
            Nabil Alshurafa is an Associate Professor of Preventive Medicine and
            of Computer Science and Electrical and Computer Engineering at
            Northwestern University. He received his Ph.D. in Computer Science
            at the University of California Los Angeles. He currently directs
            the NIH- and NSF-funded HABits Lab, which aims to bridge computer
            science and behavioral science research. His current research seeks
            to enable passive assessment of lifestyle habits with the goal of
            designing technology-supported lifestyle treatments for obesity,
            smoking cessation, and mental health. His long-term goal is to
            design mobile health systems that combine machine learning and
            wearable sensors to understand human behaviors in their natural
            setting, as well as psychological state and environmental context,
            with the ultimate goal of designing interventions that help manage
            symptoms, prevent illness, and improve health and well-being.
          </p>
        </div>
      </div>
      <Footer /> */}
    </>
  );
}
