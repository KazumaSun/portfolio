import Header from "@/compornents/common/Header/Header";
import { ReactNode } from "react";

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
    </>
  )
}