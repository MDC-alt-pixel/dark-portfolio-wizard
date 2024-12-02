import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Type definition for media items
type MediaItem = {
  id: string;     // Google Drive file ID
  type: "image" | "video";  // Media type
  title: string;  // Title of the media
};

export const MediaCarousel = () => {
  // State to store media items from Google Drive
  const [mediaItems] = useState<MediaItem[]>([
    // Placeholder items - replace with actual Google Drive integration
    { id: "placeholder1", type: "image", title: "Project 1" },
    { id: "placeholder2", type: "video", title: "Project 2" },
  ]);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/50">
      {/* Section title */}
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
        Mes Réalisations
      </h2>

      {/* Carousel component for media display */}
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {mediaItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/20">
                {/* Placeholder for Google Drive media */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">{item.title}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};