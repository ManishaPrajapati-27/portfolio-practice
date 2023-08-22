import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-red-600 header">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            // activeClassName="text-white"
            className="inline-flex nav-link intems-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex nav-link items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex nav-link items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-red-100 bg-red-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex nav-link items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            // activeClassName="text-blue-100 bg-red-700"
          >
            Project
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/ManishaPrajapati-27/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/manisha-prajapati-019373221/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/manishaprajapati492/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
