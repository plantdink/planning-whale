import Head from 'next/head';

export default function HeadSEO({ seoTag }) {
  return (
    <Head>
      <title>Agent Field Manual | {seoTag}</title>
    </Head>
  );
}
