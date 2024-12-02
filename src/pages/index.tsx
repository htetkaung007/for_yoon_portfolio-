import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Column1/Header";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProviderWrapper";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Layout from "@/components/Bar/Layout";
import LandingPage from "@/components/test";

export default function Home() {
  return <Header></Header>;
}
