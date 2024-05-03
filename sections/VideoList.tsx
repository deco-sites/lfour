import type { ImageWidget } from 'apps/admin/widgets.ts';
import VideoListIsland from '../islands/VideoList.tsx';

export interface Galeria {
  title: string;
  description?: string;
  photos: {
    label?: string;
    url?: string;
    thumbnail?: {
      src?: ImageWidget;
      alt?: string;
    };
  }[];
}

export default function VideoList({
  title = "Nossa Galeria",
  description = "oferecemos a experiência que o seu projeto de carpintaria de acabamento merece.",
  photos = [
    {
      label: 'Home',
      url: '',
      thumbnail: {
        src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/51bab41b-3324-4112-b4de-427238533c5a',
        alt: 'Logo',
      },
    },
    {
      label: 'Home',
      url: '',
      thumbnail: {
        src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/ba7718a3-e65b-4a2d-9a03-a611373b031c',
        alt: 'Logo',
      },
    },
    {
      label: 'Home',
      url: '',
      thumbnail: {
        src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/42024821-a42a-4359-b6dc-165b794954ea',
        alt: 'Logo',
      },
    },
  ],
}: Galeria) {
  return <VideoListIsland title={title} description={description} photos={photos} />;
}
