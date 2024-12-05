import Head from 'next/head';
import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function Layout({children, title}: Props) {
  const t = useTranslations('seoJSON');

  return (
    <>
      <Head>
        <title>{[title, t('websiteTitle')].join(' - ')}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className='min-h-screen flex flex-col items-center bg-gray-100'>
        {children}
      </div>
    </>
  );
}
