import { ReactNode } from "react";

import Footer from "@/compornents/common/Footer/Footer";
import Header from "@/compornents/common/Header/Header";

interface Props {
  children?: ReactNode;
}

export default function MainLayout(props: Props) {
  return (
    <>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}