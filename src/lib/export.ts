'use client';

/**
 * Client-side export helpers. jsPDF and html2canvas are heavy, so they are
 * imported dynamically only when the user actually exports.
 */

async function renderCanvas(node: HTMLElement) {
  const { default: html2canvas } = await import('html2canvas');
  return html2canvas(node, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    imageTimeout: 15000,
    // Capture the full element even when it sits off-screen.
    width: node.offsetWidth,
    height: node.offsetHeight,
    scrollX: 0,
    scrollY: 0,
  });
}

/**
 * Trigger a file download reliably across browsers.
 *
 * A Blob + object URL is used (never a giant `data:` URL): Chrome silently
 * refuses to download large `data:` URLs, and Firefox/Safari require the anchor
 * to be attached to the DOM. Both are handled here.
 */
function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.rel = 'noopener';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  // Defer cleanup so the browser has time to start the download.
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 1500);
}

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('Canvas is empty — nothing to export.'))),
      'image/png',
      1.0,
    );
  });
}

export async function downloadPng(node: HTMLElement, fileName: string): Promise<void> {
  const canvas = await renderCanvas(node);
  // toBlob avoids the string-length limits of toDataURL on large canvases.
  const blob = await canvasToBlob(canvas);
  triggerDownload(blob, `${fileName}.png`);
}

export async function downloadPdf(node: HTMLElement, fileName: string): Promise<void> {
  const [{ jsPDF }, canvas] = await Promise.all([import('jspdf'), renderCanvas(node)]);

  const imgData = canvas.toDataURL('image/png', 1.0);
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
  heightLeft -= pageHeight;

  // Add extra pages when the document is taller than one A4 page.
  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pageHeight;
  }

  // Output as a Blob and use the shared, DOM-attached download path rather than
  // jsPDF's internal save(), which fails the same way on large files.
  triggerDownload(pdf.output('blob'), `${fileName}.pdf`);
}

export function printNode(): void {
  window.print();
}

/** Build a data URL QR code for the given text. */
export async function generateQrDataUrl(text: string): Promise<string> {
  if (!text) return '';
  const QRCode = (await import('qrcode')).default;
  return QRCode.toDataURL(text, {
    width: 240,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#0f172a', light: '#ffffff' },
  });
}
