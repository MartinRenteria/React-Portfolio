import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/Home/Home";
import ContactMe from "../components/ContactMe/ContactMe";
import Navbar from "../components/NavBar/Navbar";
import Skills from "../components/Skills/skills";
import "./index.css"


export default function Layout ({ children }) {
        return (
            <>
            <Navbar />
            <Home />
            <ContactMe />
            <Skills />
            </>
        )
    }

    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }