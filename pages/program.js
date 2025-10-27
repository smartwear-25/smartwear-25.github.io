import Nav from "../components/Nav";
import { useState } from "react";
import Image from "next/image";

const programData = [
    { type: "event", title: "Opening Remarks", time: "08:30 – 08:45" },
    {
        type: "event",
        title: "Keynote: Heads-Up Computing: Towards the Next Interaction Paradigm for Wearable Intelligent Assistants",
        details: (
            <>
                Prof.{" "}
                <a href="https://shengdongzhao.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">
                    Shengdong (Shen) Zhao
                </a>
                , City University of Hong Kong
            </>
        ),
        time: "08:45 – 09:45",
        keynote: {
            title: "Heads-Up Computing: Towards the Next Interaction Paradigm for Wearable Intelligent Assistants",
            abstract:
                "Heads-up computing, an emerging paradigm in human-computer interaction (HCI), aims to create seamless interactions with technology through wearable intelligent assistants. This vision relies on three crucial components: (1) bodily compatible hardware, (2) multimodal complementary interactions, and (3) interfaces that accommodate fragmented attention and are aware of potential resources. Recent advancements in large language models (LLMs) have significantly accelerated progress in these areas, enabling more natural, context-aware, and proactive systems. These developments are pushing heads-up computing beyond simple notifications to complex, multi-modal interactions that blend seamlessly with our environment and daily activities, allowing for efficient information processing in everyday life. However, as we integrate these AI-driven assistants more deeply into our lives, we must carefully consider ethical implications such as privacy and cognitive load. Balancing technological advancement with human-centered principles is crucial to create systems that enhance productivity while respecting user autonomy and well-being, ultimately augmenting human capabilities without compromising fundamental values.",
            bio: (
                <>
                    {`Shengdong Zhao is a Professor in the School of Creative Media and the Department of Computer Science at City University of Hong Kong. He established and led the Synteraction (formerly NUS-HCI) research lab in 2009 at the National University of Singapore. Prof. Zhao received his Ph.D. in Computer Science from the University of Toronto and a Master's degree in Information Management Systems from the University of California, Berkeley.

With extensive experience in developing innovative interface tools and applications, Prof. Zhao is a regular contributor to top-tier HCI conferences and journals like CHI, ToCHI, Ubicomp/IMWUT, CSCW, UIST, and IUI. He served as a senior consultant with Huawei Consumer Business Group in 2017. An active member of the HCI community, Prof. Zhao serves on program committees for major HCI conferences and was the paper co-chair for ACM SIGCHI conference in 2019 and 2020, and is the paper co-chair for ACM UIST conference in 2025.

Prof. Zhao introduced the concept of Heads-up Computing in 2017, contributing to several key projects and publications in this area, including a featured article on heads-up computing in the September 2023 issue of Communications of the ACM. His research aims to develop innovative interface tools that enhance daily life through this new interaction paradigm. For more information about his work, please visit `}
                    <a href="http://www.shengdongzhao.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        www.shengdongzhao.com
                    </a>
                    .
                </>
            ),
            photo: "/prof_shengdong_zhao.webp",
        },
    },
    {
        type: "session",
        title: "Paper Session 1",
        time: "09:45 – 10:25",
        papers: [
            {
                title: "OxBioZ: Wearable Continuous Bioimpedance Monitoring System and Multi-Activity Dataset with Physiological and Motion Signals",
                authors: [
                    { name: "Xinyu Hou", url: "https://www.cs.ox.ac.uk/people/xinyu.hou/", affiliation: "University of Oxford" },
                    { name: "Yiyuan Yang", url: "https://www.cs.ox.ac.uk/people/yiyuan.yang/", affiliation: "University of Oxford" },
                    { name: "Jonas Beuchert", url: "https://profiles.cardiff.ac.uk/staff/beuchertj", affiliation: "Cardiff University" },
                    { name: "Hakan Kayan", url: "https://hkayann.github.io/", affiliation: "Cardiff University" },
                    { name: "Qian Xie", url: "https://nuaaxq.github.io/personal_website/", affiliation: "University of Leeds" },
                    { name: "Kim Tien Ly", url: "https://ori.ox.ac.uk/people/kim-tien-ly/", affiliation: "University of Oxford" },
                    { name: "Qianyi Deng", url: "https://www.cs.ox.ac.uk/people/qianyi.deng/", affiliation: "University of Oxford" },
                    { name: "Nhat (Nick) Pham", url: "https://www.agilecps.org/team/nick", affiliation: "Cardiff University" },
                    { name: "Andrew Markham", url: "https://www.cs.ox.ac.uk/people/Andrew.Markham/", affiliation: "University of Oxford" },
                    { name: "Niki Trigoni", url: "https://www.cs.ox.ac.uk/people/niki.trigoni/", affiliation: "University of Oxford" },
                ],
                abstract: "Vital sign monitoring and body composition analysis are both used for various medical applications. However, there is a lack of devices capable of conducting continuous vital sign monitoring and body composition analysis simultaneously during daily activities. We present a wearable device named 'OxBioZ', capable of performing (i) continuous single-frequency bioimpedance analysis, (ii) multi-frequency bioimpedance analysis, (iii) electrocardiography (ECG), and (iv) inertial measurements. This allows continuous estimation of cardiac function, respiration analysis and total body water (TBW) during daily activities without the needs for multiple devices or specialized monitoring protocols. Leveraging OxBioZ, we collected a comprehensive multi-activity dataset from 21 participants, totaling over 1000 min of synchronized bioimpedance, motion, and ground-truth physiological measurements. Baseline studies on vital sign estimation and TBW assessment demonstrate the platform’s feasibility and provide a benchmark dataset for advancing bioimpedance-driven wearable health analytics.",
                keywords: "Biosignal; Bioimpedance; Wearable devices",
                classification: "10010405.10010444.10010446 Applied computing~Consumer health [500]",
            },
            {
                title: "FreqLT: Frequency-Domain Linear Transformation for Privacy-Preserving and Efficient Machine Learning on Wearable Sensor Signals",
                authors: [
                    { name: "Shusheng Li", affiliation: "Research Institute of Advanced Equipment, Zhenjiang" },
                    { name: "Liang Chen", affiliation: "Harbin Institute of Technology, China" },
                    { name: "Yang Bo", affiliation: "McMaster University, Canada" },
                ],
                abstract: "The proliferation of wearable computing devices has enabled unprecedented opportunities for personalized health monitoring and human-computer interaction. However, the continuous stream of highly sensitive physiological and kinematic data they generate poses significant privacy and security risks, especially when processed on untrusted cloud-based Machine Learning as a Service (MLaaS) platforms. Existing privacy-preserving techniques present a stark trade-off: cryptographic methods like Homomorphic Encryption offer robust security but are computationally prohibitive for resource-constrained wearables, while simpler perturbation-based methods degrade model performance and offer weak privacy guarantees. To address this challenge, we propose FreqLT, a novel and lightweight framework for Privacy-Preserving and Efficient Machine Learning on wearable devices. The core insight of FreqLT is that the discriminative information for most sensor-based ML tasks resides in the frequency domain. It is a learnable, invertible linear transformation directly to the frequency-domain representation of the sensor data, effectively obscuring the original signal's time-domain characteristics and sensitive statistical properties. Our experiments on different datasets show that FreqLT provides superior privacy protection compared to other methods.",
                keywords: "wearable computing; privacy and security; linear transformation; machine learning",
                classification: "10002978.10003014.10003017 Security and privacy~Mobile and wireless security [500]",
            },
        ],
    },
    { type: "event", title: "Coffee Break", time: "10:30 – 11:00" },
    {
        type: "session",
        title: "Paper Session 2",
        time: "11:00 – 12:00",
        papers: [
            {
                title: "WearGuard: Defeating Adversarial Attacks in Wearable AI-based Activity Recognition Systems",
                authors: [
                    { name: "Yihan Wang", url: "https://scholars.cityu.edu.hk/en/persons/yihan-wang", affiliation: "City University of Hong Kong" },
                    { name: "Huanqi Yang", url: "https://huanqiyang.site/", affiliation: "City University of Hong Kong" },
                    { name: "Weitao Xu", url: "https://www.weitaoxu.com/", affiliation: "City University of Hong Kong" },
                ],
                abstract: "Inertial Measurement Units (IMUs) on wearables have revolutionized HAR in healthcare, fitness, and smart environments. In recent years, a large body of work has adopted deep neural networks as the backbone for IMU-based HAR, achieving high classification accuracy across various benchmarks. However, these deep neural networks are vulnerable to imperceptible adversarial perturbations, leading to misclassifications and posing severe risks in safety-critical applications such as elderly monitoring, rehabilitation, and industrial safety. This paper introduces WearGuard, a comprehensive defense framework designed to enhance the adversarial robustness of IMU-based HAR systems. The framework combines a signal-level module that reconstructs clean representations from corrupted inputs using a lightweight autoencoder and multi-teacher supervision, and a model-level module that maintains temporal consistency and preserves semantic relationships in the learned embeddings. Extensive experiments across multiple datasets and neural architectures demonstrate the effectiveness of our approach against four major adversarial attacks. WearGuard recovers over 85% of clean accuracy under different adversarial conditions.",
                keywords: "Human activity recognition (HAR); Adversarial Attacks",
                classification: "10003120.10003138 Human-centered computing~Ubiquitous and mobile computing [500]",
            },
            {
                title: "Multi-Sensor Fusion for Indoor Smartphone Localization with Attention Mechanism",
                authors: [
                    { name: "Haoxuan Li", url: "https://microwaves.site.hw.ac.uk/haoxuan-li/", affiliation: "Heriot-Watt University" },
                    { name: "Xijia Wei", url: "https://xijiawei.com/", affiliation: "University College London" },
                    { name: "Zhiqiang Wei", url: "https://scholar.google.com/citations?user=XgLv-SoAAAAJ&hl=en", affiliation: "Baidu Inc." },
                    { name: "Valentin Radu", url: "https://vradu.uk/", affiliation: "University of Sheffield" },
                    { name: "Cheng Wang", url: "https://scholar.google.com/citations?user=oXS7rVAAAAAJ&hl=en", affiliation: "Heriot-Watt University" },
                    { name: "Wenda Li", url: "https://researchportal.hw.ac.uk/en/persons/wenda-li", affiliation: "Heriot-Watt University" },
                ],
                abstract: "Indoor localization has become an essential technology for navigation, asset tracking, and context-aware applications in environments where GPS signals are unavailable or unreliable. In this work, we present a multi-sensor fusion framework for indoor smartphone localization that integrates Inertial Measurement Unit (IMU) data with Wi-Fi Received Signal Strength Indicator (RSSI) measurements. IMU data provides high-frequency motion tracking, capturing short-term user movements, while Wi-Fi RSSI offers absolute positioning references from surrounding access points. To address the limitation of IMU (dead reckoning) and Wi-Fi RSSI (fluctuations and loss), we incorporate an attention mechanism that adaptively assigns higher weights to the most reliable input features. This allows the system to maintain accurate localization even when up to 90% of Wi-Fi measurements are missing. Experimental evaluations in realistic indoor settings demonstrate that our approach significantly reduces localization error compared to traditional sensor fusion.",
                keywords: "Indoor Localization; Multimodal Sensing; Sensor Fusion; Wi-Fi Fingerprinting; Location Tracking; Recurrent Neural Networks",
                classification: "10010147 Computing methodologies [500]; 10010147.10010178 Computing methodologies~Artificial intelligence [500]; 10010147.10010257 Computing methodologies~Machine learning [500]; 10010147.10010257.10010293.10010294 Computing methodologies~Neural networks [500]; 10010147.10010257.10010321 Computing methodologies~Machine learning algorithms [500]; 10010583.10010588.10010559 Hardware~Sensors and actuators [500]; 10010583.10010588.10010595 Hardware~Sensor applications and deployments [500]; 10010583.10010588.10010596 Hardware~Sensor devices and platforms [500]; 10010583.10010588.10011669 Hardware~Wireless devices [500]; 10010583.10010588.10011670 Hardware~Wireless integrated network sensors [500]; 10010520.10010553.10010559 Computer systems organization~Sensors and actuators [500]; 10010147.10010257.10010258.10010262 Computing methodologies~Multi-task learning [500]; 10010405.10010444.10010447 Applied computing~Health care information systems [300]; 10003456.10003462.10003602.10003607 Social and professional topics~Health information exchanges [300]; 10003456.10003462.10003602.10003608.10003609 Social and professional topics~Remote medicine [300]",
            },
            {
                title: "KneeSense: A Smart-Textile Knee Brace for In Situ Form Assessment in Remote Training and Rehabilitation",
                authors: [
                    { name: "Rongrong Gong", url: "https://scholar.google.com/citations?user=aAhPaR4AAAAJ&hl=en", affiliation: "The Hong Kong University of Science and Technology" },
                    { name: "Haosong Zhong", url: "https://scholar.google.com/citations?user=U-LbAnIAAAAJ", affiliation: "The Hong Kong University of Science and Technology" },
                    { name: "Mitch Guijun Li", url: "https://limg.hkust.edu.hk/mitch-guijun-li/", affiliation: "The Hong Kong University of Science and Technology" },
                ],
                abstract: "Remote and home-based coaching expand access to expert guidance, yet their safety and effectiveness depend on in situ, joint-level assessment. We introduce KneeSense, a smart-textile knee brace that integrates dual inertial measurement units (IMUs) and a miniature time-of-flight (ToF) range sensor to produce actionable, per-repetition analytics for remote training and rehabilitation. The IMUs provide 3D orientation and acceleration, while the ToF sensor captures millimeter-scale distance changes during flexion/extension to disambiguate depth/phase and mitigate drift. From IMU–ToF signals, KneeSense computes knee flexion angle, angular speed, knee-to-knee range, and an acceleration-based instability index that flags technique issues associated with injury risk. Embedded in a washable textile sleeve, the system processes data locally to detect form deviations in real time. Bluetooth transmits summary metrics to a companion app for user feedback and remote coach/therapist review, without continuous raw-data streaming. Together, these capabilities provide a camera-free, on-body approach to joint-level form assessment that supports safer technique, improved adherence, and scalable remote care, while laying the groundwork for future closed-loop feedback.",
                keywords: "rehabilitation; sensing; assessment; smart textiles; wearable computing",
                classification: "10003120.10003121 Human-centered computing~Human computer interaction (HCI) [500]",
            },
        ],
    },
];

const Keynote = ({ keynote, details }) => {
    return (
        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{keynote.title}</h3>
            <div className="text-lg text-gray-600 mb-6">{details}</div>
            <div>
                <h4 className="font-bold text-2xl text-gray-700 border-b pb-2 mb-3">Abstract</h4>
                <p className="text-justify text-gray-600 leading-relaxed">{keynote.abstract}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
                <div className="flex-shrink-0 md:w-64 w-full">
                    <Image src={keynote.photo} alt="Photo of Shengdong Zhao" width={300} height={500} className="rounded-lg shadow-md w-full object-cover" />
                </div>
                <div className="flex-grow">
                    <h4 className="font-bold text-2xl text-gray-700 border-b pb-2 mb-3">Bio</h4>
                    <p className="text-justify text-gray-600 whitespace-pre-line leading-relaxed">{keynote.bio}</p>
                </div>
            </div>
        </div>
    );
};

const Paper = ({ title, authors, abstract, keywords, classification }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="p-3 rounded-md bg-slate-50 border">
            <div className="flex justify-between items-start">
                <div className="pr-4">
                    <strong>{title}</strong>
                    <br />
                    <em className="text-gray-600">
                        {authors.map((author, index) => (
                            <span key={index}>
                                {author.url ? (
                                    <a href={author.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">
                                        {author.name}
                                    </a>
                                ) : (
                                    author.name
                                )}
                                {author.affiliation && ` (${author.affiliation})`}
                                {index < authors.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </em>
                </div>
                <span className="font-mono text-lg cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "[-]" : "[+]"}
                </span>
            </div>
            {isOpen && (
                <div className="mt-3 pt-3 border-t border-slate-200 space-y-3">
                    <p className="text-justify">{abstract}</p>
                    <div>
                        <strong className="text-sm">Keywords:</strong>
                        <p className="text-sm">{keywords}</p>
                    </div>
                </div>
            )}
        </li>
    );
};

export default function Program() {
    const keynoteItem = programData.find((item) => item.keynote);
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <div className="text-justify font-sans break-word pb-2">
                    <h2 className="pt-2 text-2xl font-bold dark:text-gray-800">Workshop Program</h2>
                    <div className="text-lg text-gray-700 mt-2">
                        <p>📍 Location: Room 2463, HKUST Campus</p>
                        <p>🗺️ <a href="https://navigate.ust.hk/path/app/location/directions?id=685cef3d07973ca98d5248fa&building_floor_id=bf0000000000000000000109&end=685cef3d07973ca98d5248fa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Link to map</a></p>
                        <p>📅 Date: November 8, 2025</p>
                    </div>

                    <div className="mt-4">
                        {programData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="bg-blue-100 p-2 rounded-md">
                                    {item.keynote ? (
                                        <a href="#keynote-details" className="text-blue-700 hover:underline">
                                            <strong className="text-lg">{item.title}</strong>
                                        </a>
                                    ) : (
                                        <strong className="text-lg">{item.title}</strong>
                                    )}
                                    <br />
                                    <span>{item.time}</span>
                                    {item.details && (
                                        <>
                                            <br />
                                            <span>{item.details}</span>
                                        </>
                                    )}
                                </div>
                                {item.type === "session" && (
                                    <ul className="mt-4 list-none pl-0 space-y-3">
                                        {item.papers.map((paper, paperIndex) => (
                                            <Paper key={paperIndex} {...paper} />
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    {keynoteItem && (
                        <div id="keynote-details" className="pt-8 mt-8 border-t">
                            <h2 className="text-3xl font-bold text-center dark:text-gray-800 mb-6">Keynote Speaker</h2>
                            <Keynote keynote={keynoteItem.keynote} details={keynoteItem.details} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
