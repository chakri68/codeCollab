import Head from "next/head";
import dbConnect from "../../db/lib/dbConnect";
import Code from "../../db/models/CodeData.js";
import Codeview from "../../components/codeview";

export default function EmbedCode({
  code: { title, author, language, code, expiresAt, createdAt },
  link,
}) {
  return (
    <>
      <Head>
        <title>codeCollab | {title}</title>
        <meta name="title" content={`codeCollab | ${title}`} />
        <meta property="og:title" content={`codeCollab | ${title}`} />
        <meta property="twitter:title" content={`codeCollab | ${title}`} />
      </Head>
      <div id="fullScreen">
        <Codeview langauge={language} code={code} embed={true} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  await dbConnect();
  try {
    let doc = await Code.findOne({ pasteId: params.pasteId }).lean();
    doc.createdAt = doc.createdAt.toString();
    doc.expiresAt = doc.expiresAt.toString();
    doc._id = String(doc._id);
    if (doc)
      return {
        props: {
          code: doc,
          link: params.pasteId,
        },
      };
    else
      return {
        notFound: true,
      };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
