import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

const Switcher = () => {
   const { locale, asPath, push } = useRouter();
   const t = useTranslations('languagesJSON'); 

   const handleLocaleChange = (newLocale: string) => {
     if (newLocale !== locale) {
       // Change the locale and navigate to the same page
       push(asPath, asPath, { locale: newLocale });
     }
   };

   const idiomas = [
      { code: 'th', flag: 'https://flagcdn.com/w320/th.png', altKey: 'Thai' },
      { code: 'en', flag: 'https://flagcdn.com/w320/gb.png', altKey: 'English' },
      { code: 'ms', flag: 'https://flagcdn.com/w320/my.png', altKey: 'Malay' },
      { code: 'ru', flag: 'https://flagcdn.com/w320/ru.png', altKey: 'Russian' },
   ];

  return (
    <div className="flex space-x-3">
      {idiomas.map(({ code, flag, altKey }) => (
         <button 
            key={code} 
            onClick={() => handleLocaleChange(code)}
            aria-label={t(altKey)}
            title={t(altKey)}
            className='hover:scale-150 transition-transform'
         >
            <Image 
              src={flag} 
              alt={t(altKey)} 
              width={36} 
              height={16}
              quality={100} 
            />
         </button>
      ))}
    </div>
  );
}

export default Switcher;