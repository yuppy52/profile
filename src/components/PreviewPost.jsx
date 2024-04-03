import React, { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { formatTimestamp } from "../utils/formatTimestamp";

const PreviewPost = ({ image }) => {
  const [prevUrl, setPrevUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getImageUrl = async (imageRef) => {
      try {
        const url = await getDownloadURL(imageRef);
        setPrevUrl(url);
      } catch (e) {
        setError(`${e}`);
      }
    };

    const imageRef = ref(storage, `${image.filename}`);
    getImageUrl(imageRef);
  }, [image.filename]);

   // image.timestamp が定義されている場合のみ formatTimestamp を呼び出す
   const timestampText = image.timestamp ? formatTimestamp(image.timestamp.toDate()) : '';

  return (
    <>
        <div className="shadow-lg p-10 m-10 w-350 h-400 relative border-2 border-inherit">
        <p className="font-bold">{image.title}</p>  
        <p>
            <img
            src={prevUrl}
            alt={error}
            style={{ height: 200, width: 300, objectFit: "cover" }}
            />
        </p>
        <p>{image.content}</p>
        <p className="absolute right-0 bottom-0 mr-5 mb-5">{timestampText}</p>
        </div>
    </>
  );
};

export default PreviewPost;
