import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  anchorId?: string;
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
  "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  tagline,
  image = DEFAULT_IMAGE,
  placement = "left",
  anchorId = "one",
  disableSpacing,
  cta,
}: Props) {
  return (
    <div class={`${placement === 'left' ? "bg-[#E3D6C5]" : "bg-[#251B0E]"}`}>
      <div class={`
      ${placement === 'left' ? "bg-detalhe-1" : "bg-detalhe-3"}
      bg-repeat-x h-[11px] relative -top-[10px]`}></div>
      <div id={anchorId} class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
        <div
          class={`flex ${PLACEMENT[placement]
            } gap-12 md:gap-20 text-left items-center z-10 ${disableSpacing?.top ? "" : "pt-12 lg:pt-28"
            } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
        >
          <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
            <Image
              width={640}
              class="object-fit z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div class={`w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10 ${placement === 'left' ? "text-[#251B0E]" : "text-[#E3D6C5]"}`}>

            {tagline && (
              <p class="text-sm font-semibold">
                {tagline}
              </p>
            )}
            <div class={`block w-12 h-1 mb-2 ${placement === 'left' ? "bg-[#533723]" : "bg-[#987D5E]"}`}></div>
            <p class="text-4xl leading-snug">
              {title}
            </p>
            <p class="leading-normal">
              {description}
            </p>
            <div class="flex gap-3 pt-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                  ${placement === 'left' && item.style == "Outline" ? "text-[#251B0E]" : ""}
                   ${placement === 'right' && item.style == "Outline" ? "text-[#E3D6C5]" : ""}
                  
                `}
                >
                  {item?.text}
                  {item.style == "Ghost" && (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                        fill={`${placement === 'left' ? "#251B0E" : "#E3D6C5"}`}
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}