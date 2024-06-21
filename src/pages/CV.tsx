import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';
import { FaFileDownload } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;

export const CV = () => {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <>
      <a
        href="/Ruairidh_Taylor_CV.pdf"
        download
        className="text-slate-400 font-bold py-2 inline-flex items-center gap-2"
      >
        <FaFileDownload className="text-slate-400" />
        <span>Download</span>
      </a>
      <Document
        file={'/Ruairidh_Taylor_CV.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        className={'pb-8'}
      >
        {Array.from(new Array(numPages), (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={maxWidth}
          />
        ))}
      </Document>
    </>
  );
};
