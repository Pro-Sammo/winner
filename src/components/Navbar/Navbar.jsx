"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import axios from "axios";

import Logo from "../../../public/logo.png";

import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [category, setCategory] = useState([]);

  const getAllCategory = async () => {
    try {
      const res = await axios.post("/api/v1/admin/getcategory");
      const result = res.data;
      setCategory(result);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <motion.header>
      <motion.nav
        id="navBlur"
        className="mx-auto flex max-w-full items-center justify-between py-6 px-4 lg:px-20 md:px-12 bg-[#519fd2a7] fixed top-0 right-0 left-0 z-50 backdrop-blur-sm"
        aria-label="Global"
      >
        <div className="flex justify-center items-center  max-h-6">
          <a href="/" className="-m-1.5 p-1.5">
            <Image src={Logo} width={400} alt="logo" className="w-96" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/product"
            className="text-lg font-semibold leading-6 text-white "
          >
            Products
          </a>
          <a
            href="/about"
            className="text-lg font-semibold leading-6 text-white"
          >
            About Us
          </a>
        </Popover.Group>
      </motion.nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <a
                          href="/product"
                          className="text-lg font-semibold leading-6"
                        >
                          Products
                        </a>
                        <a
                          href="/about"
                          className="text-lg font-semibold leading-6 text-white"
                        >
                          About Us
                        </a>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
