import Image from "next/image";
import { assets } from "@/assets/assets";
export default function Footer({ isDarkMode }) {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Harshal Patel. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/im-harshal">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hp97/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
