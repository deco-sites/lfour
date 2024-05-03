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
    <div style={`background-image: url(${image})`}>
      text
    </div>
  )
}