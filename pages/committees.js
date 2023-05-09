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
            <li>Alessandro Montanari, Nokia Bell Lab</li>
          </ul>
        </div>
        <div className="text-left font-sans break-word pb-2">
          <h2 className="pt-2">Program Committee</h2>
          <ul className="list-disc pl-5 mb-1">
            <li>Alessandro Montanari, Nokia Bell Labs</li>
            <li>Bo Wei, Lancaster University</li>
            <li>Brano Kusy, CSIRO</li>
            <li>Chengwen Luo, Shenzhen University</li>
            <li>Chris Xiaoxuan Lu, Edinburg University</li>
            <li>Dong Ma, Singapore Management University</li>
            <li>Evangelos Niforatos, Delft University of Technology</li>
            <li>Flora Salim, University of New South Wales</li>
            <li>Gabriele Civitarese, University of Milan</li>
            <li>Hassan Ghasemzadeh, Washington State University</li>
            <li>Hirozumi Yamaguchi, Osaka University</li>
            <li>Hua Huang, University of California, Merced</li>
            <li>Jagmohan Chauhan, University of Southampton</li>
            <li>Maria Gorlatova, Duke University</li>
            <li>Przemysław Pawełczak, Delft University of Technology</li>
            <li>Roozbeh Ghaffari, Northwestern University</li>
            <li>Stephan Sigg, Aalto University</li>
            <li>Suranga Seneviratne, University of Sydney</li>
            <li>Tianxing Li, Michigan State University</li>
            <li>
              Tristan Braud, Hong Kong University of Science and Technology
            </li>
            <li>Weitao Xu, City University of Hong Kong</li>
            <li>Xucong Zhang, Delft University of Technology</li>
            <li>Zhenyu Yan, Chinese University of Hong Kong</li>
            <li>Zimu Zhou, Singapore Management University</li>
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
