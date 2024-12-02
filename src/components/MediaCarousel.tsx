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
  description: string; // Description of the media
};

export const MediaCarousel = () => {
  // State to store media items from Google Drive
  const [mediaItems] = useState<MediaItem[]>([
    // Placeholder items - replace with actual Google Drive integration
    { 
      id: "placeholder1", 
      type: "image", 
      title: "Project 1",
      description: "Description détaillée du projet 1. Vous pouvez expliquer ici le contexte, les objectifs et les résultats obtenus."
    },
    { 
      id: "placeholder2", 
      type: "video", 
      title: "Project 2",
      description: "Description détaillée du projet 2. Expliquez ici les techniques utilisées, le processus créatif et l'impact du projet."
    },
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
              <div className="relative group aspect-video rounded-lg overflow-hidden bg-secondary/20">
                {/* Placeholder for Google Drive media */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-gray-400">{item.title}</p>
                  {/* Description overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-sm text-white text-center overflow-y-auto max-h-full">
                      {item.description}
                    </p>
                  </div>
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