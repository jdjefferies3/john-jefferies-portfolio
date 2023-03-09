import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  titleHeader,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <header className={siteTitle}>
        <div className={titleHeader}>&lt;JJ&#62;</div>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/experience" className={navLinkText}>
                Experience
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={container}>
        <h3>Good evening distinguished panel of judges</h3>
        <h1 className={heading}>I'm John Jefferies</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
