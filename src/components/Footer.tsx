import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('subcontentJSON');

  return (
    <footer className="bg-blue-400 shadow-md text-white p-2 w-full">
      <div className="container mx-auto text-center">
        <p className="sm:text-sm">{t('footer')}</p>
        <p className="text-xs mt-1">
          &copy; {new Date().getFullYear()} Max Surnin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
