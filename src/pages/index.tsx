import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Content from '@/components/Content';
import Footer from '@/components/Footer';

export default function Index() {
  const t = useTranslations('subcontentJSON');

  return (
    <Layout title={t('title')}>
      <Navbar />
      <div className="text-center mt-6 px-4">
        <h2 className="mt-4 text-gray-700 font-extrabold">{t('question')}</h2>
      </div>
      <Content />
      <Footer />
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