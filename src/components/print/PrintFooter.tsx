import React from 'react';
import { useTranslation } from 'react-i18next';

const PrintFooter: React.FC<{ signatureUrl: string }> = ({ signatureUrl }) => {
  const { t } = useTranslation('print');

  return (
    <footer className="print-only p-8 mt-4 border-t border-gray-200 text-center">
        <div className="mb-4 flex justify-center">
           <img src={signatureUrl} alt={t('signature_alt')} className="h-16 opacity-80" />
       </div>
       <p className="text-sm text-gray-500 font-medium">
           {t('made_in')} {new Date().toLocaleDateString(t('locale'), { day: 'numeric', month: 'long', year: 'numeric' })}
       </p>
   </footer>
 );
};

export default PrintFooter;
