import React from "react";
import Text from "../elements/Text";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue_button to-alternative flex flex-col w-full h-full rounded-xl gap-6 py-5 mt-4">
      <Text
        variant="text-sm"
        className="text-black font-primary font-regular text-center tracking-[5px] ml-[5px] mt-3"
      >
        ARE YOU READY?
      </Text>
      <div>
        <Text
          variant="text-xxl"
          className="text-white font-bold text-center leading-[100%] capitalize"
        >
          be a part of the
        </Text>
        <Text
          variant="text-xxl"
          className="text-white font-bold text-center leading-[100%] capitalize"
        >
          next big thing
        </Text>
      </div>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          className="flex justify-center w-[383px] mt-4"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
