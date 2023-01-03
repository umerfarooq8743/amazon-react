import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
} from "@heroicons/react/outline";



const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north avenue orland , FL 32801 </span>
                        </span>

                        <span className={css.pngLine}>
                            {""}
                            <PhoneIcon className={css.icon} />
                            <a href="tel:352-306-4415">352-306-4415</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="s.m.umerfarooq8743@gmail.com">s.m.umerfarooq8743@gmail.com</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.deatil}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <a href="/Sign In">Sign In</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UserIcon className={css.icon}></UserIcon>
                            <a href="/about">
                                <p>About Us</p>
                            </a>
                        </span>
                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon}></LinkIcon>
                            <a href="/Safter Privacy & TermSafter Privacy & Term">Safter Privacy & Term</a>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyriht© 2022 by Amazon , Inc.</span>
                <span>All right ReservedA</span>
            </div>
        </div>

    )
}

export default Footer
