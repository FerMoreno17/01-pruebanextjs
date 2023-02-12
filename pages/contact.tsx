import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function Contact() {
  return (
    <>
      <h1>--- Contact PAGE ----</h1>
      <h1 className={"title"}>
        {/* IR A <a href="/">Home!</a> */}
        IR A <Link href={"/"}>HOME!</Link>
      </h1>

      <p className={"description"}>
        Pagina Nº3
        <code className={"code"}>pages/contact.js</code>
      </p>
    </>
  );
}

type Props = {
  page?: JSX.Element;
};

Contact.getLayout = function getLayout({ page }: Props) {
  return (
    <MainLayout>
      <BaseLayout>{page}</BaseLayout>
    </MainLayout>
  );
};
