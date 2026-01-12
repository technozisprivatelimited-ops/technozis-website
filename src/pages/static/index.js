import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

const Terms = () => {
  const router = useRouter();
  const { htmlContent = "", title = "" } = router.query;

  return (
    <>
      <Head>
        <title>{title} | Technozis</title>
        <meta name="description" content={`${title} of Technozis`} />
      </Head>
      <main className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>
    </>
  );
};

export default Terms;
