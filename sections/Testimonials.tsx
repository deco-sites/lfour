import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
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
  slides?: Testimonial[];
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
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full min-h-[292px]"
    >
      <div class="flex flex-col justify-center gap-16 p-8 border border-[#E3D6C5] text-[#E3D6C5] rounded-2xl h-full">
        <p class="text-lg text-center">{content?.description}</p>
        <div class="flex items-center justify-center gap-5">
          <Image
            class="object-cover w-14 h-14 rounded-full"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={56}
            height={56}
          />
          <div class="flex flex-col">
            <p class="font-semibold text-[#E3D6C5]">{content?.name}</p>
            <p class="text-[#E3D6C5]">{content?.position}</p>
          </div>
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
      <ul class="carousel col-span-full gap-3 z-10">
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
      <div class="bg-detalhe-3 bg-repeat-x h-[11px] relative -top-[10px]"></div>

      <div class="min-h-min flex flex-col lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-28">
        <h2 class="text-4xl text-[#E3D6C5] leading-snug pb-12 lg:pb-16 text-center">
          {title}
        </h2>
        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-6"
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

        <div class="flex justify-between pt-8 lg:px-16">
          {props.dots && <Dots slides={slides} interval={interval} />}{" "}
          {props.arrows && <Buttons />}
        </div>

      </div>

      <div class="bg-detalhe-3 bg-repeat-x h-[11px] relative -bottom-[10px] rotate-180"></div>
    </div>
  );
}

export default Carousel;
