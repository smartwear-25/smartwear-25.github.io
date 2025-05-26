import Nav from "../components/Nav";

export default function commitees() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto">
                <div className="text-left font-sans break-word pb-2">
                    <h2 className="pt-2">Program Committee Chairs</h2>
                    <ul className="list-disc pl-5 mb-1">
                        <li>Zhenyu Yan, The Chinese University of Hong Kong, HK (zyyan@cuhk.edu.hk)</li>
                        <li>Qijia Shao, The Hong Kong University of Science and Technology, HK (qijiashao@ust.hk)</li>
                        <li>Guohao Lan, Delft University of Technology, the Netherlands (g.lan@tudelft.nl)</li>
                    </ul>
                </div>
                <div className="text-left font-sans break-word pb-2">
                    <h2 className="pt-2">Program Committee</h2>
                    <ul className="list-disc pl-5 mb-1">
                        <li>TBD</li>
                    </ul>
                </div>
                <div className="text-left font-sans break-word pb-2">
                    <h2 className="pt-2">Workshop Web Chair</h2>
                    <ul className="list-disc pl-5 mb-1">
                        <li>Xinyan Wang, The Chinese University of Hong Kong, HK</li>
                    </ul>
                </div>
                <div className="text-left font-sans break-word pb-2">
                    <h2 className="pt-2">Publicity Chair</h2>
                    <ul className="list-disc pl-5 mb-1">
                        <li>Lingyu Du, TU Delft, the Netherlands</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}