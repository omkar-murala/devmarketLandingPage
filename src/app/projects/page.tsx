import { Card } from './_components/Card';
import React from 'react'
import { Filter } from './_components/Sort';
import Link from 'next/link';

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

function page() {
  return (
   <>
   {/* <Filter/> */}
   <section className='grid grid-rows-2 lg:grid-cols-3 items-center justify-center p-[2rem]'>
    {websiteLists.map((items,index)=>{
        return(
            <>
            <div key={index + '-' + index} className='p-[3rem]'>
            <Link href={`/details/${items.id}`}>
                <Card images={items.img} title={items.heading} link={items.link}/>
            </Link>
            </div>
            </>
        )
    })}
   </section>
   </>
  )
}

export default page



// import React from 'react';
// import { Filter } from './_components/Sort'


// function page() {
//   return (
//     <>
//     <section className='flex flex-col items-center'>
//         <Filter/>
//     </section>
//     </>
//   )
// }

// export default page