import React from "react";
import Text from "../elements/Text";
import heroPic from "../../assets/img/hero-pic.png";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-1/2 flex flex-col gap-6">
        <Text
          variant="text-xxxl"
          className="text-white font-bold leading-[87px] capitalize"
        >
          discover and collect rare NFTs
        </Text>
        <Text variant="text-md" className="text-white font-base max-w-[350px]">
          The most secure marketplace for buying and selling unique crypto
          assets.
        </Text>
        <div className="flex gap-3 w-full">
          <Button variant="primary" size="lg" className="w-full">
            <Text variant="text-md" className="font-regular font-primary">
              BUY NFTS
            </Text>
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <Text variant="text-md" className="font-regular font-primary">
              SELL NFTS
            </Text>
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <Image alt="hero" src={heroPic} width={532} height={452} />
      </div>
    </div>
  );
};

export default Hero;
