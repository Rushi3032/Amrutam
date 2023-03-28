import React from "react";
import css from "./footer.module.css";
import Logo from "../../assets/amrutam1.jpg";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Amrutam</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>
                40,jaybhavani society,395006,
                <br />
                surat,gujrat
              </span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel: 7623918972">7623918972</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@amrutam.com">support@amrutam.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              About Us
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright @2023 by amrutam, Inc.</span>
        <span> All Right reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
