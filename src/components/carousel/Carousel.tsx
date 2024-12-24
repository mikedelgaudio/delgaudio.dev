import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export interface ICarouselImage {
  src: string;
  alt: string;
}

export interface ICarouselProps {
  images: ICarouselImage[];
  intervalInMs?: number; // milliseconds
}

export function Carousel({
  images,
  intervalInMs = 3000,
}: ICarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, intervalInMs);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [images.length, intervalInMs]);

  return (
    <div class="relative w-full max-w-md mx-auto h-28 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          class={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            class="object-contain h-28 w-30"
          />
        </div>
      ))}
    </div>
  );
}
