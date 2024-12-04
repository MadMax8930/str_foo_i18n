import { useTranslations } from 'next-intl';

const Content = () => {
  const t = useTranslations('maincontentJSON');

  return (
    <div className="w-full p-4 sm:p-8 lg:p-16">
      <p className="sm:text-xl text-sm text-slate-700 font-semibold pb-4 underline">{t('greeting')}</p>
      <div 
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: t('primary') }}
      >
      </div>
    </div>
  );
};

export default Content;
