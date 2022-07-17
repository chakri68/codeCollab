import Header from "../components/header";
import Menu from "../components/menu";
import Head from "next/head";
import ModalPopUp from "../components/modal";
import Footer from "../components/footer";
import Script from "next/dist/client/script";
import ToolBar from "../components/toolbar";
import Codeview from "../components/codeview";
import dbConnect from "../db/lib/dbConnect";
import Code from "../db/models/CodeData.js";
import Minmenu from "../components/minMenu";
import dynamic from "next/dist/shared/lib/dynamic";
// import { nanoid } from "nanoid";

const DynamicData = dynamic(() => import("../components/codedetails"), {
  ssr: false,
  loading: () => "loading...",
});

export default function CloudCode({
  code: { title, author, language, code, expiresAt, createdAt },
  link,
}) {
  return (
    <>
      <Head>
        <title>codeCollab | {title}</title>
        <meta name="title" content={`codeCollab | ${title}`} />
      </Head>
      <Header />
      <ToolBar title={title} link={link} />
      <div id="fullScreen">
        <Minmenu
          items={[
            { id: 1, label: "home", url: "/" },
            { id: 2, label: "login", url: "/" },
            {
              id: 3,
              label: "github",
              url: "https://github.com/chakri68/codeCollab",
            },
            { id: 4, label: "api", url: "/" },
            {
              id: 5,
              label: "changelog",
              url: "https://github.com/chakri68/codeCollab/tree/main",
            },
            { id: 6, label: "legal", url: "/" },
          ]}
        />
        <ModalPopUp
          id="customModal"
          titleJSX="Custom"
          className="pop-down"
          options={
            <>
              <p>Custom</p>
            </>
          }
        />
        <Codeview langauge={language} code={code} />
      </div>
      <DynamicData
        createdAt={createdAt}
        expiresAt={expiresAt}
        author={author}
        code={code}
      />
      <Footer />
      <Script src="scripts/componentScripts/modalScript.js"></Script>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  await dbConnect();
  try {
    let doc = await Code.findById(params.pasteId, { _id: 0 }).lean();
    doc.createdAt = doc.createdAt.toString();
    doc.expiresAt = doc.createdAt.toString();
    console.log(doc);
    return {
      props: {
        code: doc,
        link: params.pasteId,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
