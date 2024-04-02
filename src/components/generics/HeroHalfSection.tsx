import React from "react";
import Text from "../elements/Text";
import { Button } from "../ui/button";

export type HeroHalfSectionProps = {
  topTitle: string;
  title: string;
  body: string;
  buttonText: string;
};

const HeroHalfSection = ({
  body,
  buttonText,
  title,
  topTitle,
}: HeroHalfSectionProps) => {
  return (
    <div className="flex flex-col justify-start">
      <Text
        variant="text-md"
        className="font-primary font-base tracking-[5px] ml-[5px]"
      >
        {topTitle}
      </Text>
      <Text
        variant="text-xxl"
        className="text-white font-bold leading-[100%] capitalize"
      >
        {title}
      </Text>
      <Text variant="text-md" className="font-base max-w-[350px] mt-4">
        {body}
      </Text>
      <Button variant="primary" size="lg" className="w-1/2 mt-8">
        <Text variant="text-md" className="font-regular font-primary">
          {buttonText}
        </Text>
      </Button>
    </div>
  );
};

export default HeroHalfSection;
