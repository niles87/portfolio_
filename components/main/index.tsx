import { LayoutProps } from "../../types/interfaces";
import style from "../../styles/Main.module.css";

export default function Main({ children }: LayoutProps) {
  return <main className={style.main}>{children}</main>;
}
