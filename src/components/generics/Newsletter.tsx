import React from "react";
import Text from "../elements/Text";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <section className="flex flex-col gap-10">
      <Text
        variant="text-md"
        className="font-secondary text-white font-bold tracking-widest capitalize text-center"
      >
        join our newsletter
      </Text>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          className="bg-blue_button text-white pl-7 rounded-[50px] h-9 w-[300px]"
        />
        <Button size="sm" className="rounded-[50px] px-6 ml-[-25px]">
          SUBMIT
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
