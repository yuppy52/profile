import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useImages = () => {
  const [allImages, setAllImages] = useState([]);
  const [imagesError, setErrorMsg] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "images"), (snapshot) => {
      try {
        const imagesData = snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());
        setAllImages(imagesData);
      } catch (error) {
        setErrorMsg(`Error: ${error}`);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { allImages, imagesError };
};

export default useImages;
