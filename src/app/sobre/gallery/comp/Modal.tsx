import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
// import useKeypress from 'react-use-keypress';
import { ImageProps } from '@/@types/image-gallery'
import SharedModal from './SharedModal'
import router from 'next/router'
import { range } from '@/utils/range'
import Image from 'next/image'

interface ModalProps {
  images: ImageProps[],
  currentIndex: number,
  onClose: () => void,
  isOpen: boolean,
}

export default function Modal({
  images,
  currentIndex,
  onClose,
  isOpen
}: ModalProps) {
  let overlayRef = useRef(null)

  let filteredImages = images?.filter((img: ImageProps) =>
    range(currentIndex - 15, currentIndex + 15).includes(img.id)
  )

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(currentIndex);

  function changePhotoId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal);
  }

  // useKeypress('ArrowRight', () => {
  //   if (index + 1 < images.length) {
  //     changePhotoId(index + 1)
  //   }
  // })

  // useKeypress('ArrowLeft', () => {
  //   if (index > 0) {
  //     changePhotoId(index - 1)
  //   }
  // })

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
       <Dialog.Panel className={"h-4/6 w-[1024px] bg-zinc-600"}>
        {/* <Dialog.Overlay
          ref={overlayRef}
          as={motion.div}
          key="backdrop"
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        /> */}

        <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
          <motion.div
            initial={false}
            className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
          >
            <AnimatePresence initial={false}>
              {filteredImages?.map(({ public_id, format, id }) => (
                <motion.button
                  initial={{
                    width: '0%',
                    x: `${Math.max((currentIndex - 1) * -100, 15 * -100)}%`,
                  }}
                  animate={{
                    scale: id === currentIndex ? 1.25 : 1,
                    width: '100%',
                    x: `${Math.max(currentIndex * -100, 15 * -100)}%`,
                  }}
                  exit={{ width: '0%' }}
                  onClick={() => changePhotoId(id)}
                  key={id}
                  className={`relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                >
                  <Image
                    alt="small photos on the bottom"
                    width={180}
                    height={120}
                    className={`h-full transform object-cover transition`}
                    // src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                    src={"https://res.cloudinary.com/dmbxnzbdu/image/upload/v1693840011/formato-consultoria/2022-02-04_5_esxkhd_i8ufxe.jpg"}
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* <SharedModal
          index={curIndex}
          direction={direction}
          images={images}
          changePhotoId={changePhotoId}
          closeModal={onClose}
          navigation={true}
        /> */}
       </Dialog.Panel>
    </Dialog>
  )
}