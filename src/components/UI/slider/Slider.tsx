import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./ImageSlider.module.scss";
import Image, {StaticImageData} from "next/image";

interface ImageSliderProps {
    images: StaticImageData[]; // Массив URL картинок
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className={styles.sliderContainer}>
            {/* Выбранное изображение */}
            <div className={styles.mainImage}>
                <Image src={selectedImage} alt={'123'} width={600} height={360} />
            </div>

            {/* Миниатюры */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => {}}
                onSwiper={() => {}}
                className={styles.thumbnailSwiper}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className={
                                image === selectedImage ? styles.activeThumbnail : ""
                            }
                            onClick={() => setSelectedImage(image)}
                            src={image} alt='123' width={160} height={124} style={{borderRadius: '10px', cursor: 'pointer'}} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
