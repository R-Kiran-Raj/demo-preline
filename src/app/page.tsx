"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

import { Layout } from "./layouts/Layout";
import Text from "@/src/components/Text/Text";
import Input from "@/src/components/Input/Input";
import Button from "@/src/components/Button/Button";


import { API_BASE_URL } from "../utils/config";
import Link from "next/link";

export default function GetStarted() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(6); // July as default
  const [selectedYear, setSelectedYear] = useState(2023);

  const isInputValid = inputValue.trim() !== "";
  const isButtonDisabled = !isInputValid;

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  const handleInputError = (error: any) => {
    setInputError(error);
  };

  const getValue = (value: any) => {
    setInputValue(value);
  };

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Layout>
      <Text variant="h1" className="pb-6 pt-8 font-gt-super-ds-trial-rg">
        Lets get started, shall we?
      </Text>
      <Text
        variant="h3"
        className="text-charcoal text-center font-light font-Satoshi pb-10"
      >
        Start your Event Attendance Admin App.
      </Text>

      <div className="flex flex-col mb-20">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Age</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">New York No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Jim Green</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">27</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">London No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">Joe Black</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Sidney No. 1 Lake Park</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        {/* Heading */}
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            1 Aug, 2023
          </h3>
        </div>
        {/* End Heading */}

        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg className="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              Created "Preline in React" task
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Find more detailed insctructions here.
            </p>
            <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <Image
                className="shrink-0 size-4 rounded-full"
                src="/images/user-1.jpeg"
                alt="Avatar"
                width={32}
                height={32}
              />
              James Collins
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <span className="flex shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Marked "Install Charts" completed
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Finally! You can check it out here.
            </p>
            <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">

              <Image
                className="shrink-0 size-4 rounded-full"
                src="/images/user-1.jpeg"
                alt="Avatar"
                width={32}
                height={32}
              />
              James Collins
            </button>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}

        {/* Heading */}
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            31 Jul, 2023
          </h3>
        </div>
        {/* End Heading */}

        {/* Item */}
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          {/* End Icon */}

          {/* Right Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Just chill for now... 😉
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
      </div>
      {/* End Timeline */}

<div className="pt-20">
<div className="p-3 space-y-0.5">
      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
        <div className="col-span-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-label="Previous"
          >
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
          >
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <span className="text-gray-800 dark:text-neutral-200">/</span>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
          >
            {[2023, 2024, 2025, 2026, 2027].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1 flex justify-end">
          <button
            type="button"
            onClick={handleNextMonth}
            className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-label="Next"
          >
            <svg className="shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex pb-1.5">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <span key={day} className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
            {day}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap">
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="m-px w-10" />
        ))}
        {days.map((day) => (
          <div key={day} className="m-px w-10">
            <button
              type="button"
              className="size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200"
            >
              {day}
            </button>
          </div>
        ))}
      </div>
    </div>
</div>
    </Layout>
  );
}
