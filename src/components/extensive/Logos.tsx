import Image from "next/image";
import React from "react";
import logo1 from "../../assets/img/logo-1.png";
import logo2 from "../../assets/img/logo-2.png";
import logo3 from "../../assets/img/logo-3.png";
import logo4 from "../../assets/img/logo-4.png";
import Text from "../elements/Text";

const Logos = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Text
          variant="text-md"
          className="font-regular font-primary tracking-[7px]"
        >
          FEATURED ON
        </Text>
      </div>
      <div className="flex justify-between items-center rounded-md px-16 bg-logos_bg bg-opacity-[19%]">
        <Image
          alt=""
          src={logo1}
          width={189}
          height={50}
          className="text-opacity-[19%]"
        />
        <Image alt="" src={logo2} width={180} height={25} />
        <Image alt="" src={logo3} width={56} height={30} />
        <Image alt="" src={logo4} width={114} height={29} />
      </div>
    </div>
  );
};

export default Logos;
