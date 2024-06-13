import { Viewer } from '@react-pdf-viewer/core';

export const CV = () => {
  return (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
      }}
    >
      <Viewer fileUrl="../assets/cv-template.pdf" />
    </div>
  );
};
