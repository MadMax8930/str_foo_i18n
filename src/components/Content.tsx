import { useTranslations } from 'next-intl';

const Content = () => {
  const t = useTranslations('maincontentJSON');

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 pt-6 sm:pt-12 flex-grow">
      <h1 className="sm:mb-12 mb-6 text-center text-lg sm:text-2xl text-gray-700 font-extrabold">{t('question')}</h1>
      <p className="sm:text-xl text-md text-slate-700 font-semibold pb-4 underline">{t('greeting')}</p>
      <div 
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: t('primary') }}
      >
      </div>
    </div>
  );
};

export default Content;
