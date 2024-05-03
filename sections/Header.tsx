import Image from 'apps/website/components/Image.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

type Type = 'dark' | 'light';

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export const ColorType: Record<Type, string> = {
  dark: '[#E3D6C5]',
  light: 'base-100',
};

export const StyleType: Record<'background' | 'color', string> = {
  background: 'bg-',
  color: 'text-',
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-[#E3D6C5] transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles('top-[-0.7rem]') +
  'peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]',
  generateLineStyles('top-[-0.35rem]') + 'peer-checked:opacity-0',
  generateLineStyles('top-[0]') +
  'peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]',
];

export default function Header({
  logo = {
    src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04',
    alt: 'Logo',
  },
  navigation = {
    links: [
      { label: 'Home', url: '/' },
      { label: 'About us', url: '/' },
      { label: 'Princing', url: '/' },
      { label: 'Contact', url: '/' },
    ],
    buttons: [
      { id: 'change-me-1', href: '/', text: 'Change me', outline: false },
      { id: 'change-me-2', href: '/', text: 'Change me', outline: true },
    ],
  },
}: Nav) {
  return (
    <header class="bg-[#201209] relative z-50">
      <nav class="container mx-auto lg:px-0 px-4">
        <div class="flex gap-8 items-center justify-between py-4 lg:py-8 grid grid-cols-3">
          <label
            class="cursor-pointer lg:hidden pt-6 relative z-40"
            for="menu-mobile"
          >
            <input class="hidden peer" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} class={`relative ${style}`}></div>
            ))}
            <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
              &nbsp;
            </div>
            <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
              <div class="bg-base-100 flex flex-col float-right gap-8 min-h-full pt-12 px-6 shadow-2xl w-1/2">
                <ul class="flex flex-col gap-8">
                  {navigation?.links.map((link) => (
                    <li>
                      <a href={link.url} aria-label={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul class="flex items-center gap-3">
                  {navigation.buttons?.map((item) => (
                    <a
                      key={item?.id}
                      id={item?.id}
                      href={item?.href}
                      target={item?.href.includes('http') ? '_blank' : '_self'}
                      class={`font-normal btn btn-primary ${item.outline && 'btn-outline'
                        }`}
                    >
                      {item?.text}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </label>

          <ul class="hidden items-center justify-between lg:flex w-full">
            <ul class="flex">
              {navigation.links.map((link) => (
                <li>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="link no-underline hover:underline p-4 text-[#E3D6C5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </ul>

          <div class=" flex justify-center">
            <a class="absolute left-0 right-0 top-2 mx-auto w-max" href="/">
              <Image
                src={logo.src || ''}
                width={280}
                height={141}
                alt={logo.alt}
              />
            </a>
          </div>

          <ul class="flex justify-end gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes('http') ? '_blank' : '_self'}
                class={`font-normal btn btn-primary ${item.outline && 'btn-outline'
                  } text-[#251B0E] bg-[#E3D6C5] hover:opacity-90 hover:text-[#251B0E] hover:bg-[#E3D6C5]`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
