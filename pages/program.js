import Nav from "../components/Nav";
import { useState } from "react";

const programData = [
    { type: "event", title: "Opening Remarks", time: "08:30 – 08:45" },
    { type: "event", title: "Keynote Speaker", details: <>Prof. <a href="https://shengdongzhao.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline hover:underline">Shengdong (Shen) Zhao</a>, City University of Hong Kong (CityU)</>, time: "08:45 – 09:45" },
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
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <div className="text-justify font-sans break-word pb-2">
                    <h2 className="pt-2 text-2xl font-bold dark:text-gray-800">Workshop Program</h2>
                    <div className="text-lg text-gray-700 mt-2">
                        <p>📍 Location: Room 2463, HKUST Campus</p>
                        <p>📅 Date: November 8, 2025</p>
                    </div>

                    <div className="mt-4">
                        {programData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="bg-blue-100 p-2 rounded-md">
                                    <strong className="text-lg">{item.title}</strong>
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
                </div>
            </div>
        </div>
    );
}
