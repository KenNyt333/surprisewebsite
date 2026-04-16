import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CiCamera } from "react-icons/ci";

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      image: "/date.jpeg",
      caption: "Our baby ",
    },
    {
      id: 2,
      image: "/laugh.jpeg",
      caption: "Comfy baby",
    },
    {
      id: 3,
      image: "/perfect.jpeg",
      caption: "Perfect Moments in Time",
    },
    {
      id: 4,
      image: "/longdist.jpeg",
      caption: "Bhai Date",
    },
    {
      id: 5,
      image: "/qnland-1.jpeg",
      caption: "Church Date",
    },
    {
      id: 6,
      image: "/temp.jpeg",
      caption: "our lil edit🏵️😜",
    },
    {
      id: 7,
      image: "/ride.jpeg",
      caption: "our Family pic",
    },
  ];

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-peach-100 via-pink-100 to-lavender-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center justify-center gap-3"
        >
          Memory Lane 
          <CiCamera className="text-pink-500" />
        </motion.h2>

        {/* Photo Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateZ: 2,
                zIndex: 10,
              }}
              onClick={() => setSelectedPhoto(index)}
              className="relative aspect-square cursor-pointer group"
            >
              <div
                className="absolute inset-0 rounded-2xl shadow-xl bg-cover bg-center transition-transform duration-300"
                style={{ backgroundImage: `url(${photo.image})` }}
              ></div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center"
              >
                <p className="text-white text-center px-4 font-semibold">
                  {photo.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {photos.map((photo, index) => (
    <motion.div
      key={photo.id}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateZ: 2,
        zIndex: 10,
      }}
      onClick={() => setSelectedPhoto(index)}
      className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl shadow-xl"
    >
      {/* Image background — blurred by default, clear on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 blur-md group-hover:blur-0"
        style={{ backgroundImage: `url(${photo.image})` }}
      ></div>

      {/* Dark overlay + caption — visible by default, fades on hover */}
      <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-500">
        <p className="text-white text-center px-4 font-semibold">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  ))}
</div>

      </div>

      {/* Lightbox View */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Full Image */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-3xl w-[80vw] h-[80vh] rounded-3xl shadow-2xl relative bg-contain bg-center bg-no-repeat"

            style={{ backgroundImage: `url(${photos[selectedPhoto].image})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-6 rounded-b-3xl">
              <p className="text-white text-2xl text-center font-semibold">
                {photos[selectedPhoto].caption}
              </p>
            </div>
          </motion.div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </motion.div>
      )}
    </section>
  );
}
