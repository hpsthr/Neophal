'use client'
import Image from 'next/image';
import classes from './main.module.css';
import Homepage from './home/home.js'
import Sample from "./sample/sample.js"
import {motion} from "framer-motion"
import { createContext } from 'react';
const Context = createContext()


export default function Home() {
  return (
    <main className={classes.Main}   >
    <Homepage/>
    </main>
  )
}
