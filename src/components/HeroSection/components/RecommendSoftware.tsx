import React from "react";
import { Card } from "./Card";
let websiteListe = [
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716103993/Screenshot_from_2024-05-19_13-01-42_qlrnx5.png",
    heading: "The best marketing",
    para: "t is a long established fact that a reader will be distracted by the readable content of a pagewhen looking",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page289/seotech/",
  },
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716102935/ydrarn0xdomsttaexbhz.png",
    heading: "Future of Digital Marketing",
    para: "Boost your digital marketing campaigns and increase your conversion rates",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page294/the-seo-company/",
  },
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716102935/i1ebggvyqssinz9bkai3.png",
    heading: "Digital Marketing Experts",
    para: "",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page294/digian/",
  },
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104325/jkw2tsed5xywr8sj97yi.png",
    heading: "Aenean Salad Reserved",
    para: "This Is The Earth To-Morrow Nibh Phasellus, Until He Needs To Adorn The Hatred Of The Bow, Always ",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page273/spourmo/",
  },
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104327/jwgoqzclq1unxu4sdyhp.png",
    heading: "Business Agency Profit Your Marketing",
    para: "It is a long established fact that a reader ",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page286/cobsine/",
  },
  {
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104327/iawbkr2yghtkldr0ctbj.png",
    heading: "ONIX Digital",
    para: "We Provide The Best Service With Our Tools",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page287/onix-digital/",
  },
];

function RecommendSoftware() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold font-sans ">Recommened Software</h1>
      </div>
      <div className="grid gap-6 gap-y-10  md:grid-cols-2 lg:grid-cols-3">
        {websiteListe.map((ele, index) => {
          return (
            <>
              <div key={index}>
                <Card
                  img={ele.img}
                  heading={ele.heading}
                  para={ele.para}
                  link={ele.link}
                />
              </div>
            </>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center">
      <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      View More
    </button>
        </div>
    </>
  );
}

export default RecommendSoftware;
