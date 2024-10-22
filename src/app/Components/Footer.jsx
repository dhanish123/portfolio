import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-[30px] Z-10 flex justify-between">
        {/* <span>LOGO</span> */}
        <img src="/images/y11.png" alt="" width={80} height={80} />

        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
