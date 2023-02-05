import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>--- HOME PAGE ----</h1>
      <h1 className={"title"}>
        {/* IR A <a href="/">Home!</a> */}
        IR A <Link href={"/about"}>About</Link>
      </h1>

      <p className={"description"}>Pagina Nº1</p>
    </MainLayout>
  );
}
