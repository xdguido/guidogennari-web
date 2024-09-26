import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button } from '@ui/Button';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function LanguageToggler() {
  const router = useRouter();
  const { locale } = router;
  const [isEnglish, setIsEnglish] = useState(locale === 'en');
  const t =
    locale === 'en' ? { switchLanguage: 'Toggle language' } : { switchLanguage: 'Cambiar idioma' };

  useEffect(() => {
    setIsEnglish(locale === 'en');
  }, [locale]);

  const changeLanguage = () => {
    const newLocale = isEnglish ? 'es' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
    changeLanguage();
  };

  return (
    <Button
      onClick={handleToggle}
      variant="link"
      size="sm"
      aria-label="Change Language"
      title={t.switchLanguage}
    >
      <LanguageIcon className="h-5 w-5" aria-hidden={true} />
    </Button>
  );
}

export default LanguageToggler;
