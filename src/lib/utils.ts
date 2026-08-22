import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a Google Drive view/sharing link to a /preview link for embedding in an iframe
 */
export function getGoogleDrivePreviewUrl(url: string): string {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    let previewUrl = url.replace(/\/view(\?.*)?$/, '/preview').replace(/\/edit(\?.*)?$/, '/preview');
    if (!previewUrl.includes('/preview')) {
      const match = previewUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        previewUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return previewUrl;
  }
  return url;
}

/**
 * Converts a Google Drive link to a direct download link
 */
export function getGoogleDriveDownloadUrl(url: string): string {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }
  return url;
}
