import Image from 'apps/website/components/Image.tsx';
import { Galeria } from '../sections/VideoList.tsx';

function VideoModal({ imageName, id }: { imageName: string; id: string }) {
  return (
    <dialog id={id} data-videomodal className="modal">
      <div className="modal-box rounded-none w-screen max-w-none max-h-none p-0 flex  items-center justify-center bg-black h-full">

        <img className="pointer-events-none modal-img" src={`${imageName}`} loading="lazy" />

        <form
          method="dialog"
          className="modal-backdrop bg-transparent z-10 w-full h-full absolute left-0"
        >
          <button>Close</button>

          <button class="btn btn-circle btn-outline text-gray-50 hover:text-gray-900 fixed top-6 right-6 opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </div>
      <div class="modal-backdrop bg-black" />
    </dialog>
  );
}

function VideoItem({
  imageName,
  modalId,
  index,
}: {
  imageName: string;
  modalId: string;
  index: number;
}) {
  return (
    <>
      {/* <VideoModal imageName={imageName} id={modalId} /> */}
      <button
        onClick={() => {
          // (document?.getElementById(modalId) as HTMLFormElement)?.showModal()
          //  document?.querySelector('[data-videomodal] iframe')?.src = modalId
          const iframe = document?.querySelector('[data-videomodal] img');

          if (iframe.src) {

            if (iframe.src !== modalId) iframe.src = modalId;
            (document?.querySelector('[data-videomodal]') as HTMLFormElement)?.showModal();
          }

        }
        }
        class="block relative pt-[100%] w-full overflow-hidden"
      >
        <Image
          className="pointer-events-none w-full h-full absolute top-0 left-0"
          src={`${imageName}`}
          width={"886"}
          height={"499"}
          fetchPriority="low"
        />
      </button>
    </>
  );
}

export default function VideoList(props: Galeria) {
  const { title, description, photos } = props;
  return (
    <>
      <section
        id="galeria"
        class="flex flex-col items-center justify-between pb-28 galeria r-scroll bg-[#E3D6C5]"
      >
        <div class="
      bg-detalhe-1
      bg-repeat-x h-[11px] w-full relative -top-[10px]"></div>
        <h2 className="text-[#533723] font text-4xl text-center w-full px-2 pt-7 pb-5">
          <div class="bg-[#533723] block w-12 h-1 mx-auto mb-2"></div>
          {title}
        </h2>
        {description && (
          <p class="text-[#533723] mb-5">
            {description}
          </p>
        )}

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 group px-3 py-6 w-full">
          {photos.map((item, i) => (
            <li
              className={`flex-1 basis-1/3 hover:opacity-80  transition-all duration-500 ${i === 0 ? 'origin-left' : 'origin-right'
                }`}
            >
              <VideoItem
                imageName={item.thumbnail.src}
                modalId={item.thumbnail.src}
                index={i}
                alt={item.thumbnail.alt}
              />
            </li>
          ))}
        </ul>
        <VideoModal imageName={'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8604/51bab41b-3324-4112-b4de-427238533c5a'} data-videomodal id={''} />
      </section>
    </>
  );
}
