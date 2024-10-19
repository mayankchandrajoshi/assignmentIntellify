"use client";

import React, { useState } from "react";
import styles from "./DashBoardSideBar.module.css";
import Link from "next/link";
import { MdCreateNewFolder, MdDashboard, MdDelete } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";


const DashBoardSideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`relative h-screen ${!isOpen ? "w-[70px]" : "w-[250px]"} bg-slate-900 flex flex-col transition-all duration-500 ease-in py-5`}>
        <button className="bg-slate-600 text-white cursor-pointer p-3 mx-3 text-lg" onClick={toggleSidebar}>
            {isOpen ? "Close" : <GiHamburgerMenu />}
        </button>
        <section className='mt-5 w-full flex flex-col'>
            <Link href="/dashboard" className="p-4 text-white cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in flex flex-row items-center justify-center">
                {isOpen ? "Dashboard" : <MdDashboard />}
            </Link>
            <Link href="/dashboard/create" className="p-4 text-white cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in flex flex-row items-center justify-center">
                {isOpen ? "Create Entry" : <MdCreateNewFolder />}
            </Link>
            <Link href="/dashboard/update" className="p-4 text-white cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in flex flex-row items-center justify-center">
                {isOpen ? "Update Entry" : <RiFileEditFill />}
            </Link>
            <Link href="/dashboard/delete" className="p-4 text-white cursor-pointer hover:bg-slate-600 transition-colors duration-500 ease-in flex flex-row items-center justify-center">
                {isOpen ? "Delete Entry" : <MdDelete />}
            </Link>
        </section>
        </div>
    );
};

export default DashBoardSideBar;
