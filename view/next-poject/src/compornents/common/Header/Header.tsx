import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Header.module.scss"
import clsx from "clsx";
import { formatDateToJapanTime } from "@/utils/formatDate";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header(props: HeaderProps) {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedDate = formatDateToJapanTime(now);
      setCurrentTime(formattedDate);
    };

    updateTime(); // 初回表示用
    const intervalId = setInterval(updateTime, 60000); // 1分毎に更新

    return () => clearInterval(intervalId); // クリーンアップ
  }, []);

  return (
    <>
      <div className={clsx(styles.back_style)}>
        <div>
          test
        </div>
        <div>
          nobu
        </div>
        <div className={clsx(styles.time_style)}>
          {currentTime}
        </div>
      </div>
    </>
  );

}