import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

// Type definition for media items
type MediaItem = {
  id: string;
  type: "image";
  title: string;
  description: string;
  imageUrl: string;
};

export const MediaCarousel = () => {
  // State to store media items
  const [mediaItems] = useState<MediaItem[]>([
    {
      id: "1",
      type: "image",
      title: "Développement Web",
      description: "Création d'applications web modernes et responsives",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KHLPNyd2y0e0gUa6KBU_DAXPjfS-rhb8"
    },
    {
      id: "2",
      type: "image",
      title: "Solutions Numériques",
      description: "Développement de solutions numériques innovantes",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KHaCneTCXfSaU2TrpN-8IZOoOCWFnYb_"
    },
    {
      id: "3",
      type: "image",
      title: "Intelligence Artificielle",
      description: "Intégration de solutions d'IA avancées",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KFGK4gqkm8upPVl_F8iNXWIg3c5MUnhD"
    },
    {
      id: "4",
      type: "image",
      title: "Programmation",
      description: "Expertise en développement logiciel",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KEQYgqTbTAec514v5q-szD0mr58spbSy"
    },
    {
      id: "5",
      type: "image",
      title: "Technologies Émergentes",
      description: "Exploration des dernières technologies",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KDISTxlMzqqF2k1RA4ZR73fXoYb2Ox1m"
    },
    {
      id: "6",
      type: "image",
      title: "Innovation Digitale",
      description: "Création de solutions digitales innovantes",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KAo-V9yq9W1iRFjbe-FeSHUYHrwBkZPH"
    },
    {
      id: "7",
      type: "image",
      title: "Robotique",
      description: "Développement en robotique et automatisation",
      imageUrl: "https://drive.google.com/uc?export=view&id=1KAfwnHYwvfrd56JHgDBPP7GqVer0_53e"
    },
    {
      id: "8",
      type: "image",
      title: "Cybersécurité",
      description: "Solutions de sécurité informatique avancées",
      imageUrl: "https://drive.google.com/uc?export=view&id=1K3agMfaNOFulRuc52PlhzgshXHFLvqAO"
    },
    {
      id: "9",
      type: "image",
      title: "Infrastructure Cloud",
      description: "Solutions cloud et infrastructure moderne",
      imageUrl: "https://drive.google.com/uc?export=view&id=1JefDhf_oioYQe8whqwSxUV-P8-V87Ly8"
    },
    {
      id: "10",
      type: "image",
      title: "Développement Logiciel",
      description: "Création de logiciels sur mesure",
      imageUrl: "https://drive.google.com/uc?export=view&id=1JhdbttTZs8KYvN46DsMOpYtE9tMv1DKM"
    }
  ]);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
        Mes Réalisations
      </h2>

      <Carousel className="w-full max-w-5xl mx-auto px-4">
        <CarouselContent>
          {mediaItems.map((item) => (
            <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary/20 hover:scale-105 transition-transform duration-300">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};