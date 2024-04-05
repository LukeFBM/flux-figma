import Image from "next/image";
import React from "react";
import Text from "../elements/Text";
import test from "../../assets/img/testimonial-1.png";

export type TestimonialCardProps = {
  name: string;
  body: string;
};

const TestimonialCard = ({ name, body }: TestimonialCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 bg-bg_cards rounded-md p-8">
      <div className="mt-[-95px] flex justify-center">
        <Image
          alt="testimonial"
          src={test}
          width={130}
          height={130}
          className="rounded-[100%] justify-center mix-blend-luminosity"
        />
      </div>

      <Text
        variant="text-md"
        className="text-white font-secondary font-semibold text-center"
      >
        {name}
      </Text>
      <Text
        variant="text-sm"
        className="text-white font-secondary font-base text-center"
      >
        {body}
      </Text>
    </div>
  );
};

export default TestimonialCard;
