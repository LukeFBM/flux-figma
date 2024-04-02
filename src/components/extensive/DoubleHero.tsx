import Image from "next/image";
import React from "react";
import double1 from "../../assets/img/double-hero-first.png";
import double2 from "../../assets/img/double-hero-second.png";
import HeroHalfSection from "../generics/HeroHalfSection";

const DoubleHero = () => {
  return (
    <section>
      <div className="flex items-center gap-40">
        <Image alt="3-layer-pic" src={double1} width={459} height={391} />

        <HeroHalfSection
          body="Use our built-in analytics dashboard to pull valuable insights and
        monitor the value of your Krypto portfolio over time."
          buttonText="VIEW OUR PRICING"
          title="Built-In Analytics To Track Your Nfts"
          topTitle="ANALYTICS"
        />
      </div>
      <div className="flex items-center gap-20">
        <HeroHalfSection
          body="Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time."
          buttonText="VIEW OUR PRICING"
          title="Built-In Analytics To Track Your Nfts"
          topTitle="ANALYTICS"
        />
        <Image alt="phone-pic" src={double2} width={459} height={391} />
      </div>
    </section>
  );
};

export default DoubleHero;
