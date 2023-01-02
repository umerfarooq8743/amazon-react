import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'


const Hero = () => {
    const transition = { duration: 3, type: "spring" }
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection
                </span>
                <dic className={css.text2}>
                    <span>trendy collection</span>
                    <span> trendy collection trendy collection trendy collection </span>
                </dic>
            </div>
            {/* middle side */}
            <div className={css.wrapper}>
                <motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    className={css.blueCircle}
                    transition={transition}
                ></motion.div>


                <motion.img
                    initial={{ bottom: "- 2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    src={HeroImg} alt="" width={600} />


                <motion.div
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                    transition={transition}
                    className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best sign up offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5mm</span>
                    <span>Monthly traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero