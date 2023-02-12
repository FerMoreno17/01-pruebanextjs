import React, { CSSProperties } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
}
const ActiveLink = ({ label, href }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : undefined}>{label}</a>
    </Link>
  );
};

const style: CSSProperties = {
  color: "red",
  textDecoration: "underline",
};
export default ActiveLink;
