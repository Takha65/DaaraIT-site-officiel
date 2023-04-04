import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="bg-[#0C1F3C] w-full md:h-[400px] h-[500px] flex items-center ">
      <div class="mx-auto container-xl flex justify-center items-center">
        <div class="grid grid-cols-2 md:gap-[200px] gap-6   lg:py-8 md:grid-cols-4">
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class=" hover:underline">
                  Contact Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Ordering & Payment
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Shipping
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Return
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  About Adobe Xd kid
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Press Enquiries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class=" hover:underline">
                  Contact Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Ordering & Payment
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Shipping
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Return
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  About Adobe Xd kid
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Press Enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
