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
        class="block"
      >
        <Image
          className="pointer-events-none"
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
  const { title, photos } = props;
  return (
    <>
      <section
        id="videos"
        class="flex flex-col items-center justify-between py-4 mb-12 videos r-scroll bg-[#283045]"
      >
        <h2 className="text-white font text-3xl text-center w-full px-2 pt-7 pb-5">
          {title}
        </h2>
        <ul className="flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden group py-6 w-full">
          {photos.map((item, i) => (
            <li
              className={`flex-1 basis-1/3 min-w-[70%] lg:min-w-[480px] group-hover:opacity-80 hover:hover-i transition-all duration-500 ${i === 0 ? 'origin-left' : 'origin-right'
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
        <VideoModal imageName={'video'} data-videomodal id={''} />
      </section>
    </>
  );
}
