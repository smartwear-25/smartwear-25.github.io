import Nav from "../components/Nav";

export default function commitees() {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <div className="text-left font-sans break-word pb-2">
          <h2 className="pt-2">Workshop Chairs</h2>
          <ul className="list-disc pl-5 mb-1">
            <li>Guohao Lan, Delft University of Technology</li>
            <li>Dong Ma, Singapore Management University</li>    
            <li>Alessandro Montanari, Nokia Bell Labs</li>
          </ul>
        </div>
        <div className="text-left font-sans break-word pb-2">
          <h2 className="pt-2">Program Committee</h2>
        <ul className="list-disc pl-5 mb-1">
            <li>Bo Wei, Newcastle University</li>
            <li>Chaofan Wang, Delft University of Technology</li>
            <li>Chengwen Luo, Shenzhen University</li>
            <li>Gabriele Civitarese, University of Milan</li>
            <li>Mahbub Hassan, University of New South Wales</li>
            <li>Qun Song, Delft University of Technology</li>
            <li>Stephan Sigg, Aalto University</li>
            <li>Suranga Seneviratne, University of Sydney</li>
            <li>Thivya Kandappu, Singapore Management University</li>
            <li>Tianxing Li, Michigan State University</li>
            <li>VP Nguyen, University of Massachusetts Amherst</li>
            <li>Yang Liu, University of Cambridge</li>
            <li>Yongpan Zou, Shenzhen University</li>
            <li>Zhenyu Yan, Chinese University of Hong Kong</li>
            <li>Zimu Zhou, City University of Hong Kong</li>
          </ul>
        </div>
        <div className="text-left font-sans break-word pb-2">
          <h2 className="pt-2">Publicity Chair</h2>
          <ul className="list-disc pl-5 mb-1">
            <li>Lingyu Du, Delft University of Technology</li>
          </ul>
        </div>
        <div className="text-left font-sans break-word pb-2">
          <h2 className="pt-2">Workshop Web Chair</h2>
          <ul className="list-disc pl-5 mb-1">
            <li>Changshuo Hu, Singapore Management University</li>
          </ul>
        </div>
      </div>
    </>
  );
}
