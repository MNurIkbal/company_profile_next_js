'use client'
import { Carousel } from "@material-tailwind/react";



export function Carausel({query_data}) {
  return (
    <Carousel transition={{ duration: 2 }} >
      {query_data.map((query) => (
      <div className="w-slider mt-28" >
        <img
          src={query.src}
          className="h-full w-full object-cover"
        />
      </div>
      ))}
    </Carousel>
  );
}