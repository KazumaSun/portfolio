import React from 'react';
import dynamic from 'next/dynamic';
import { Link as Scroll } from "react-scroll"
import { FaRegDotCircle } from "react-icons/fa";

import MainLayout from '@/compornents/layout/MainLayout/MainLayout'
import styles from '@/styles/MainPage.module.scss'
import clsx from 'clsx';

const ThreeScene = dynamic(() => import('@/compornents/common/ThreeScene/ThreeScene'), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      <nav className={clsx(styles.nav_style)}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0' }}>
            <Scroll to='top' smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Top
            </Scroll>
          </li>
          <li style={{ padding: '10px 0' }}>
            <Scroll to="profile" smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Profile
            </Scroll>
          </li>
          <li style={{ padding: '10px 0' }}>
            <Scroll to="skills" smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Skills
            </Scroll>
          </li>
          <li style={{ padding: '10px 0' }}>
            <Scroll to="vision" smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Vision
            </Scroll>
          </li>
          <li style={{ padding: '10px 0' }}>
            <Scroll to="career" smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Career
            </Scroll>
          </li>
          <li style={{ padding: '10px 0' }}>
            <Scroll to="contack" smooth={true} duration={600} offset={-30} className={clsx(styles.li_style)}>
              <FaRegDotCircle />
              Contack
            </Scroll>
          </li>
        </ul>
      </nav>
      <div id='top' style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: '#FFFF00', fontSize: '4rem', textAlign: 'center' }}>
          Welcome Nobu's Portfolio
        </div>
        <ThreeScene />
      </div>
      <div id='profile'>
        <div>
          Profile
        </div>
      </div>
      <div id='skills'>
        <div>
          Skill
        </div>
      </div>
      <div id='vision'>
        <div>
          Vision
        </div>
      </div>
      <div id='career'>
        <div>
          Career
        </div>
      </div>
      <div id='contack'>
        <div>
          Contact
        </div>
      </div>
    </MainLayout>
  )
}
