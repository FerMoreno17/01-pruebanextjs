import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ label, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : null}>{label}</a>
    </Link>
  );
};

const style = {
  color: "red",
  textDecoration: "underline",
};
export default ActiveLink;
