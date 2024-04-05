import React from "react";
import Text from "../elements/Text";
import TestimonialCards from "../generics/TestimonialCards";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-2">
      <Text
        variant="text-md"
        className="text-white font-primary font-base text-center tracking-[5px] ml-[5px]"
      >
        TESTIMONIALS
      </Text>
      <Text
        variant="text-xxl"
        className="text-white font-bold text-center leading-[100%] capitalize"
      >
        read what others
      </Text>
      <Text
        variant="text-xxl"
        className="text-white font-bold text-center leading-[100%] capitalize mb-14"
      >
        have to say
      </Text>
      <div className="mt-10">
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonials;
