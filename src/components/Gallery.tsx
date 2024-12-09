import Image from 'next/image';
import { BANNER_IMAGES } from '../../constants';

const Gallery = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-6 sm:py-12 bg-gray-100">
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-700 mb-8 pt-4">
        My Banner Designs
      </h2>
      <div className="space-y-2 sm:space-y-4 md:space-y-6 opacity-90">
        {BANNER_IMAGES.map((banner, index) => (
          <div key={index} className="relative w-full h-16 sm:h-24 lg:h-32">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              fill
              className="rounded-lg shadow-md border-[3px] border-[#42A5F5]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;