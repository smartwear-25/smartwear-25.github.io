import cselogo from "../public/CSELOGO.svg";
import schoollogo from "../public/unswlogo.svg";
import acmlogo from "../public/acmlogo.svg";
import Image from "next/image";
export default function Footer() {
  return (
     <>
      <div className="bg-blue-200 container h-8 mt-2">
        <p className="justify-center text-center text-xl font-semibold">
    {/*Sponsor*/}
        </p>
      </div>
      <div className="flex flex-row gap-40 justify-center mt-4">
        <div>
          <a href="https://www.acm.org/" alt="ACM">
            <Image width={180} height={180} alt="acmlogo" src={acmlogo}></Image>
          </a>
        </div>
        <div>
          <a href="https://www.cse.unsw.edu.au/" alt="cse-UNSW">
            <Image width={180} height={180} alt="cselogo" src={cselogo}></Image>
          </a>
        </div>
        <div>
          <a href="https://www.unsw.edu.au/" alt="UNSW">
            <Image
              width={180}
              height={180}
              alt="schoollogo"
              src={schoollogo}
            ></Image>
          </a>
        </div>
      </div>
    </> 
  );
}

