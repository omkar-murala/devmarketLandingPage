import React from "react";
import CardCategory from "./CardCategory";

const categories = [
  {
    title: "Web App",
    image: "https://img.freepik.com/free-vector/web-hosting-isometric-composition-with-icons-website-windows-buttons-desktop-computer-with-people-vector-illustration_1284-80933.jpg?t=st=1716106738~exp=1716110338~hmac=84e4b5fec09b2c8c85807e098343fe944f89765272308ca182a6af6fbd150eb3&w=826",
    description:
      "Build and deploy web applications with the latest technologies.",
  },
  {
    title: "WordPress",
    image: "https://img.freepik.com/free-vector/flat-design-cms-illustration_23-2148825220.jpg?t=st=1716106897~exp=1716110497~hmac=d1da105f9aba358046af266a9e3fad23b1cba03b6d6f12dfd5ff9bfd49a62ee6&w=1380",
    description: "Create beautiful websites and blogs using WordPress.",
  },
  {
    title: "Shopify",
    image: "https://img.freepik.com/free-photo/high-angle-clothes-bed-fast-fashion-concept_23-2149726122.jpg?t=st=1716107014~exp=1716110614~hmac=f35fb643c23b05648925f872802a46c69da907344aa95632e96c386dc56ad5db&w=1380",
    description: "Set up your online store and start selling with Shopify.",
  },
  {
    title: "Full Stack App",
    image: "https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1716107069~exp=1716110669~hmac=7fe70a2cc97dd62503d7719403808dbbd5867c4e113fd9e35132d3afc0916cfc&w=996",
    description:
      "Develop complete applications with both front-end and back-end.",
  },
  {
    title: "Desktop App",
    image: "https://img.freepik.com/free-vector/modern-planning-schedule-concept_23-2147929334.jpg?t=st=1716107130~exp=1716110730~hmac=b435eb50986adb57d8108651693989f35db91f64241a52b420ac8e0222e23953&w=826",
    description: "Build powerful desktop applications for various platforms.",
  },
  {
    title: "Mobile App",
    image: "https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?t=st=1716107170~exp=1716110770~hmac=6e1eb7f8bd1b91d62036d28ab4f2a8f67cd6698d27c916462354a295d1f8b758&w=1380",
    description: "Create mobile applications for iOS and Android.",
  },
];

const Categories = () => {
  return (
    <>
    <div>
      <h1 className="text-4xl font-sans font-bold text-center">Categories</h1>
    </div>
      <div className="grid gap-6 gap-y-10  md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CardCategory
            key={index}
            image={category.image}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
