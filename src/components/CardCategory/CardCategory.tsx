import React from 'react'
import { Link } from "react-router-dom";

type CardCategoryProps = {
  image: string;
  alt: string;
  href: string;
};

export const CardCategory = ({ image, alt, href }: CardCategoryProps): React.ReactElement => (
  <Link to={href}>
    <div className='bg-[#232530] w-96 h-56 flex justify-center items-center rounded-2xl hover:scale-110 transition duration-500 cursor-pointer object-cover shadow-2xl'>
      <img src={image} alt={alt} className=" w-full" />
    </div>
  </Link>
);
