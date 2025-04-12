import { SectionAdvancedFilters } from '../components/sections/SectionAdvancedFilters';
import { SectionBatchScanning } from '../components/sections/SectionBatchScanning';
import { SectionDocumentScanner } from '../components/sections/SectionDocumentScanner';
import { SectionExportShare } from '../components/sections/SectionExportShare';
import { SectionSignStamp } from '../components/sections/SectionSignStamp';

export interface SectionData {
  id: number;
  section: React.ComponentType;
  title: string;
  cap: string;
  description: string;
}

export const sectionsData: SectionData[] = [
  {
    id: 0,
    section: SectionDocumentScanner,
    title: 'Document Scanner',
    cap: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT, and Word format.',
  },
  {
    id: 1,
    section: SectionSignStamp,
    title: 'Sign & Stamp',
    cap: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    id: 2,
    section: SectionBatchScanning,
    title: 'Batch Scanning',
    cap: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    id: 3,
    section: SectionAdvancedFilters,
    title: 'Advanced Filters',
    cap: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom-made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  {
    id: 4,
    section: SectionExportShare,
    title: 'Export & Share',
    cap: 'All-Round Conversion',
    description: 'Export your scans as PDF, JPG, ZIP, TXT, and Word.',
  },
];
