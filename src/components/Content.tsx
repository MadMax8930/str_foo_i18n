import { useTranslations } from 'next-intl';

const Content = () => {
  const t = useTranslations('maincontentJSON');

  return (
    <div className="w-full p-4 sm:p-8 lg:p-16">
      <h2 className="text-xl font-semibold">{t('greeting')}</h2>
      <div 
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: t('primary') }}
      >
      </div>
    </div>
  );
};

export default Content;
