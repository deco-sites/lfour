export interface Props {
  title?: string;
  button?: {
    label: string;
    link: string;
  }
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}


export default function Budget({
  title = "GOSTARIA DE FAZER UM ORÇAMENTO?",
  button = {
    label: "ENTRAR EM CONTATO",
    link: "#"
  },
  image = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/f079d539-accd-455e-a465-f698574bda1c",
    alt: ""
  } }: Props) {
  return (
    <div class="bg-fixed" style={`background-image: url(${image.src})`}>
      <div class="flex flex-col min-h-96 justify-center items-center lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
        <h2 class="text-white text-5xl mb-6 shadow-[0px_2px_14px_0px_#7F000000]">{title}</h2>
        <a href="#" class="py-3 px-4 bg-white text-[#757575] rounded-s">{button.label}</a>
      </div>
    </div>
  )
}