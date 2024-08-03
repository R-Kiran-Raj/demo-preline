"use client";

import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
          © 2024 Event Attendance, All rights reserved{" "}
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="/"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              Manage Users
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
              className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
            >
              Reports
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default NavBar;
