import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="mx-40 sm:mx-20">
      <nav className="py-5">
        <ul className="flex justify-center">
          <li>
            <Link to="/" className="text-blue-700 py-2 px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-700 py-2 px-2">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
