import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3">দেশের সেরা সংবাদ প্ল্যাটফর্ম</h3>
            <p className="text-white"> ডাউনলোড করুন অ্যাপ </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base  text-white">
                    Google Play Store
                  </p>
                </div>
              </div>
              <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base  text-white">
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0  text-white">
              &copy; Created By Milon Chandro | All Rights Reserved!
            </p>
            <div className="order-1 md:order-2">
              <Link href={"/about"} className="px-2">About us</Link>
              <Link href={"/contact"} className="px-2 border-l">Contact us</Link>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
