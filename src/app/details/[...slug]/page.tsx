import React from 'react';
import { Product } from '../_components/Card';
let websiteLists = [
  {
    id:1,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716103993/Screenshot_from_2024-05-19_13-01-42_qlrnx5.png",
    heading: "The best marketing",
    para: "t is a long established fact that a reader will be distracted by the readable content of a pagewhen looking",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page289/seotech/",

  },
  { id:2,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716102935/ydrarn0xdomsttaexbhz.png",
    heading: "Future of Digital Marketing",
    para: "Boost your digital marketing campaigns and increase your conversion rates",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page294/the-seo-company/",
  },
  { 
    id:3,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716102935/i1ebggvyqssinz9bkai3.png",
    heading: "Digital Marketing Experts",
    para: "",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page294/digian/",
  },
  { 
    id:4,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104325/jkw2tsed5xywr8sj97yi.png",
    heading: "Aenean Salad Reserved",
    para: "This Is The Earth To-Morrow Nibh Phasellus, Until He Needs To Adorn The Hatred Of The Bow, Always ",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page273/spourmo/",
  },
  { id:5,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104327/jwgoqzclq1unxu4sdyhp.png",
    heading: "Business Agency Profit Your Marketing",
    para: "It is a long established fact that a reader ",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page286/cobsine/",
  },
  {  id:6,
    img: "https://res.cloudinary.com/dfqrdloq7/image/upload/v1716104327/iawbkr2yghtkldr0ctbj.png",
    heading: "ONIX Digital",
    para: "We Provide The Best Service With Our Tools",
    link: "https://www.free-css.com/assets/files/free-css-templates/preview/page287/onix-digital/",
  },
];

function Page({ params }: { params: { slug: string } }) {
  const website = websiteLists.find(({ id }) => id.toString() === params.slug.toString());

  if (!website) {
    return <div>Website not found</div>;
  }

  return (
    <div>
      <Product image={website.img} header={website.heading} link={website.link}/>
    </div>
  );
}

export default Page