import Head from "@Components/helpers/head/index";
import { HeaderNav } from "@Components/layout/account/headerNav";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

const titles = {
  post: "Postar Foto",
};

const HeaderAccount = () => {
  const [title, setTitle] = useState();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setTitle(titles[path] ?? "Minha Conta");
  }, [location]);

  return (
    <header className={styles.header}>
      <Head title="Perfil" />
      <h1 className="title">{title}</h1>
      <HeaderNav />
    </header>
  );
};

export default HeaderAccount;
