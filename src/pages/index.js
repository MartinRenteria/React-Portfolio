import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Home from "../components/Home/Home";
import ContactMe from "../components/ContactMe/ContactMe";
import Navbar from "../components/NavBar/Navbar";
import "./index.css"


export default function Layout ({ children }) {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `)
        return (
            <>
            <Navbar />
            <Home />
            <ContactMe />
            </>
        )
    }

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }