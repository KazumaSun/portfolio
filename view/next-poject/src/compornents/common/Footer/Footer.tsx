import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss"
import { formatDateToJapanTime } from "@/utils/formatDate";

interface HeaderProps {
  children?: ReactNode;
}

export default function Footer(props: HeaderProps) {


  return (
    <>
      <div className={clsx(styles.back_style)}>
        <div className={clsx(styles.footer_style)}>
          @2024 Nobu's Portfolio
        </div>
      </div>
    </>
  );

}