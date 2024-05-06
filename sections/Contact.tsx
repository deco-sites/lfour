
interface field {
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
}

interface Props {
  fields: field[]
}

export default function Contact() {
  return (
    <div>
      Contato
    </div>
  )
}