import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialCards = () => {
  return (
    <div className="flex justify-between gap-4">
      <TestimonialCard
        name="OLIVIA COLE"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
      />
      <TestimonialCard
        name="OLIVIA COLE"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
      />
      <TestimonialCard
        name="OLIVIA COLE"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
      />
    </div>
  );
};

export default TestimonialCards;
