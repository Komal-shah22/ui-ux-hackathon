import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import badge from '../../public/Badge.png';
import badge1 from '../../public/Badge (1).png';
import badge2 from '../../public/Badge (2).png';
import badge3 from '../../public/Badge (3).png';
import badge4 from '../../public/Badge (4).png';
import twitter from '../../public/twitter.png';
import facebook from '../../public/facebook.png';
import insta from '../../public/insta.png';
import github from '../../public/github.png';

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-[#181717] py-10 pb-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5">
        <div>
          <h3 className="text-3xl font-extrabold mb-3">SHOP.CO</h3>
          <p className="text-[12px] mb-3">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex gap-3 mt-5">
            <Link href="#" className="hover:opacity-75 transition-opacity">
              <Image src={twitter} alt="twitter" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-75 transition-opacity">
              <Image src={facebook} alt="facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-75 transition-opacity">
              <Image src={insta} alt="instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-75 transition-opacity">
              <Image src={github} alt="github" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Work</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Order</li>
            <li>Payment</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Free Books</li>
            <li>Development Tutorials</li>
            <li>How-to Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-5 flex flex-col md:flex-row justify-between items-center px-5 text-sm text-slate-400">
        <p className="mb-3 md:mb-0">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-3">
          <Image src={badge} alt="badge" width={30} height={30} />
          <Image src={badge1} alt="badge1" width={30} height={30} />
          <Image src={badge2} alt="badge2" width={30} height={30} />
          <Image src={badge3} alt="badge3" width={30} height={30} />
          <Image src={badge4} alt="badge4" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


