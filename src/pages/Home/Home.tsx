import React from "react";
import { Card } from "../../components";
import {
  logoDisney,
  logoMarvel,
  logoNatGeo,
  logoPixar,
  logoStarWars,
} from "../../assets";

type Category = {
  img: string;
  alt: string;
  href: string;
};

type HomeProps = {};

const categories: Array<Category> = [
  { img: logoDisney, alt: "logoDisney", href: "/category/disney" },
  { img: logoMarvel, alt: "logoMarvel", href: "/category/marvel" },
  { img: logoNatGeo, alt: "logoNatGeo", href: "/category/natgeo" },
  { img: logoPixar, alt: "logoPixar", href: "/category/pixar" },
  { img: logoStarWars, alt: "logoStarWars", href: "/category/starwars" },
];

export const Home = ({}: HomeProps): React.ReactElement => (
  <div className="p-10 flex flex-col justify-center items-center gap-10">
    <div className="flex flex-wrap gap-7 justify-center items-center">
      {categories.map(({ img, alt, href }) => (
        <Card image={img} alt={alt} href={href} />
      ))}
    </div>
  </div>
);
