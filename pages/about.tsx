import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <h1>--- ABOUT PAGE ----</h1>
      <h1 className={"title"}>
        {/* IR A <a href="/">Home!</a> */}
        IR A <Link href={"/"}>HOME!</Link>
      </h1>

      <p className={"description"}>
        Pagina Nº2
        <code className={"code"}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
