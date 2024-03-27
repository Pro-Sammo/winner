import React from "react";
import CardItem from "../CardItem/CardItem";
import {data} from '@/lib/data'

const Card = () => {
  return (
    <div className="w-full max-h-fit flex justify-center pb-6 md:pb-10">
      <div className="md:w-4/6 py-6 rounded-lg px-11">
        <div>
          <h1 className="font-medium text-2xl pb-1">Finishing</h1>
          <div className="h-[1px] w-full bg-blue-900"></div>
        </div>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            data?.map((item)=> <CardItem key={item.id} public_id={item.productImage} title={item.title} description={item.description} size={item.size}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
