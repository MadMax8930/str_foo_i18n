import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';
import Layout from '../components/Layout';
import Navbar from '@/components/Navbar';

export default function Index() {
  const t = useTranslations('introductionJSON');

  return (
    <Layout title={t('title')}>
      <Navbar />
      <div className="text-center mt-8 px-4">
        <h2 className="text-xl font-semibold">{t('greeting')}</h2>
        <p className="mt-4 text-gray-700">{t('desc')}</p>
        <p className="mt-2 text-gray-700">{t('question')}</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}