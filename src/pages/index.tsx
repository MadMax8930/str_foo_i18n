import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';

export default function Index() {
  const t = useTranslations('subcontentJSON');

  return (
    <Layout title={t('title')}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Content />
        <Gallery />
        <Contact />
        <Footer />
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