"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { CamperImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface CamperGalleryProps {
  images: CamperImage[];
  camperName: string;
}

export default function CamperGallery({
  images,
  camperName,
}: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  if (sortedImages.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={16}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className={styles.mainSwiper}
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={image.original}
                alt={`${camperName} photo ${image.order}`}
                fill
                sizes="638px"
                className={styles.image}
                priority={image.order === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className={styles.thumbsSwiper}
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={`thumb-${image.id}`}>
            <div className={styles.thumbWrapper}>
              <Image
                src={image.thumb}
                alt={`${camperName} thumbnail ${image.order}`}
                fill
                sizes="136px"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
