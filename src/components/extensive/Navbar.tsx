import React from "react";
import Text from "../elements/Text";

const navlinks = ["About", "Pricing", "Contacts", "Buy NFTS"];

const Navbar = () => {
  return (
    <div className="flex justify-between pt-6">
      <div>
        <Text
          variant="text-md"
          className="font-secondary text-white font-lg tracking-widest"
        >
          KRYPTO
        </Text>
      </div>
      <div>
        <ul className="flex gap-20">
          {navlinks.map((navlink) => {
            return (
              <li>
                <Text
                  variant="text-sm"
                  className="font-secondary text-white font-md hover:underline hover:text-alternative cursor-pointer underline-offset-4 transition-all duration-300 tracking-wide"
                >
                  {navlink}
                </Text>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
