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
                        <li>Ozlem Incel, University of Twente, the Netherlands</li>
                        <li>Hirozumi Yamaguchi, Osaka University, Japan</li>
                        <li>Yu Xiao, Aalto University, Finland</li>
                        <li>Dong Ma, Singapore Management University, Singapore</li>
                        <li>VP Nguyen, University of Massachusetts Amherst, USA</li>
                        <li>Chaojie Gu, Zhejiang University, China</li>
                        <li>Dongyao Chen, Shanghai Jiaotong University, China</li>
                        <li>Jingping Nie, UNC Chapel Hill, USA</li>
                        <li>Hao Pan, Microsoft Research, China</li>
                        <li>Gabriele Civitarese, University of Milan, Italy</li>
                        <li>Nam Bui, University of Colorado Denver, USA</li>
                    </ul>
                </div>
                <div className="text-left font-sans break-word pb-2">
                    <h2 className="pt-2">Web Chair</h2>
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