import React from 'react';

interface PrintFooterProps {
  signature: string;
}

const PrintFooter: React.FC<PrintFooterProps> = ({ signature }) => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = today.toLocaleDateString('fr-FR', options);
  const currentDate = `Fait à Goma, le ${dateStr}`;

  return (
    <div className="page-break-avoid mt-4 pt-3 border-t-2 border-slate-300 flex justify-between items-end">
      <div className="text-[8pt] text-slate-600 italic">
        <p className="font-semibold text-slate-800">« Certifié sincère, conforme et véritable. »</p>
        <p className="mt-0.5" id="print-date">{currentDate}</p>
        <p className="text-[7pt] text-slate-400 mt-1">Document certifié pour candidatures d'ingénierie et missions d'architecture.</p>
      </div>
      <div className="text-right">
        <img src={signature} alt="Signature" className="h-10 inline-block"/>
        <p className="text-[9pt] font-bold text-[#1A365D] border-t border-slate-400 mt-1 pt-0.5 inline-block min-w-[140px] text-center">
          Adonis Rwabira
        </p>
      </div>
    </div>
  );
};

export default PrintFooter;
