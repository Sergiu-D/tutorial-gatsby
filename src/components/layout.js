import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
];

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log("🚀 ~ file: layout.js:33 ~ Layout ~ data:", data);
  return (
    <div className="mx-40 sm:mx-20">
      <header className="flex justify-center text-4xl py-2">
        {data?.site?.siteMetadata?.title}
      </header>
      <nav className="py-5">
        <ul className="flex justify-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="text-blue-700 py-2 px-2">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 className="text-4xl py-2 text-orange-800">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
