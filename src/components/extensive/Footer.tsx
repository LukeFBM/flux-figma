import React from "react";
import Text from "../elements/Text";
import Newsletter from "../generics/Newsletter";

/* const footerLinksTitles = ["Kripto", "Market", "Contact"], */

const footerLinksFirstCol = ["Home", "About", "Buy NFTs", "Sell NFTs"];
const footerLinksSecCol = ["Browse NFTs", "BuyNFTs", "Sell NFTs"];
const footerLinksThirdCol = ["Email", "Linkedin", "Instagram", "Twitter"];

const Footer = () => {
  return (
    <section className="mt-10 flex gap-28 mb-20">
      <Text
        variant="text-md"
        className="font-secondary text-white font-bold tracking-widest"
      >
        KRYPTO
      </Text>
      <div className="flex flex-col gap-4">
        <Text
          variant="text-sm"
          className="font-secondary text-white font-semibold"
        >
          KRYPTO
        </Text>
        <ul className="flex flex-col gap-1">
          {footerLinksFirstCol.map((footerLink) => {
            return (
              <li>
                <Text
                  variant="text-sm"
                  className="font-secondary text-white font-md hover:underline hover:text-alternative cursor-pointer underline-offset-4 transition-all duration-300 tracking-wide"
                >
                  {footerLink}
                </Text>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <Text
          variant="text-sm"
          className="font-secondary text-white font-semibold"
        >
          Market
        </Text>
        <ul className="flex flex-col gap-1">
          {footerLinksSecCol.map((footerLink) => {
            return (
              <li>
                <Text
                  variant="text-sm"
                  className="font-secondary text-white font-md hover:underline hover:text-alternative cursor-pointer underline-offset-4 transition-all duration-300 tracking-wide"
                >
                  {footerLink}
                </Text>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <Text
          variant="text-sm"
          className="font-secondary text-white font-semibold"
        >
          Contact
        </Text>
        <ul className="flex flex-col gap-1">
          {footerLinksThirdCol.map((footerLink) => {
            return (
              <li>
                <Text
                  variant="text-sm"
                  className="font-secondary text-white font-md hover:underline hover:text-alternative cursor-pointer underline-offset-4 transition-all duration-300 tracking-wide"
                >
                  {footerLink}
                </Text>
              </li>
            );
          })}
        </ul>
      </div>
      <Newsletter />
    </section>
  );
};

export default Footer;
