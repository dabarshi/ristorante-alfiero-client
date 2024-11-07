// hooks/useImageLoader.js
import { useState, useEffect } from "react";

const useImageLoader = (images) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        images.map(({ img }) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = img;
            image.onload = resolve;
            image.onerror = resolve; // Avoid hanging on error
          });
        })
      );
      setLoading(false);
    };

    loadImages();
  }, [images]);

  return loading;
};

export default useImageLoader;
