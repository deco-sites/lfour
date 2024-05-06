import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Hero {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  slides?: Hero[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  slides: [
    {
      content: {
        description:
          "A qualidade na fabricação são fundamentais para garantir a satisfação do cliente",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/1af34311-6f5e-4d07-b596-13bac1876637",
        alt: "Avatar",
        name: "Sob Medida",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Hero; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full min-h-[292px]"
    >
      <div class="flex flex-col justify-center text-[#E3D6C5] h-full">
        <Image
          width={1920}
          class="w-full h-full object-cover"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={content?.avatar || ""}
          alt={content?.alt}
          decoding="async"
          loading="lazy"
        />

        <div class="relative container hidden lg:block">
          <div class="flex bg-[#201209] px-9 pt-4 pb-5 absolute left-0 bottom-24" style="transform: skew(-30deg)">
            <div class="container" style="transform: skew(30deg)">
              <h2 class="text-[#E3D6C5]">{content?.name}</h2>
              <p class="text-[#DCC9AB] font-light">{content?.description}</p>
            </div>
          </div>
        </div>
        <div class="flex-col hidden">
          <p class="font-semibold text-[#E3D6C5]">{content?.name}</p>
          <p class="text-[#E3D6C5]">{content?.position}</p>
          <p class="text-lg text-center">{content?.description}</p>
        </div>
      </div>
    </div>
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle bg-[#533723]">
          {/* <Icon
            class="text-[#E3D6C5]"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          /> */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6992 13.8845L3 10L10.6992 6" stroke="#E3D6C5" />
            <path d="M3 10H17" stroke="#E3D6C5" />
          </svg>
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle bg-[#533723]">
          {/* <Icon
            class="text-[#E3D6C5]"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          /> */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.30078 13.8845L17 10L9.30078 6" stroke="#E3D6C5" />
            <path d="M17 10H3" stroke="#E3D6C5" />
          </svg>

        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      class="bg-[#251C0D]"
    >
      <div class="min-h-min flex flex-col">
        <Slider
          class="carousel carousel-center w-full"
          rootId={id}
          interval={interval && interval * 1e3}
          infinite
        >
          {slides?.map((slide, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full"
            >
              <SliderItem
                slide={slide}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        <div class="relative container">
          <div class="flex justify-between pt-8 lg:px-16 absolute">
            {props.dots && <Dots slides={slides} interval={interval} />}{" "}
            {props.arrows && <Buttons />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
