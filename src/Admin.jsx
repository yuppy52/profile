import React, {useState} from 'react';
import { db, storage } from './firebase';
import { validateImage } from 'image-validator';
import { collection, addDoc } from 'firebase/firestore';    
import { ref, uploadBytes } from 'firebase/storage';

const Admin = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

  // ファイルのバリデーション。3GB未満でかつ画像ファイルのみに制限している
  const validateFile = async(selectedFile) => {
    const limitFileSize = 3 * 1024 * 1024;

    if (selectedFile.size > limitFileSize) {
      setError("File size is too large, please keep it under 3 GB.");
      return false;
    }

    const isValidImage = await validateImage(selectedFile);

    if (!isValidImage) {
      setError("You cannot upload anything other than image files.");
      return false;
    }

    return true;
  };

  const handleFileChange = async(e) => {
    setError(null);
    e.preventDefault();
    const selectedFile = e.target.files?.[0];

    if (selectedFile && (await validateFile(selectedFile))) {
        const reader = new FileReader();

        reader.onload = () => {
            setImage(selectedFile);
            setError(null);
            };
        
        reader.readAsDataURL(selectedFile);
    
        }
    };

    const uploadImage = async () => {
        try {
            if (!image) {
                setError('Please select an image to upload');
                return;
            }

            const timestamp = new Date().getTime();
            const uniqueFilename = `${timestamp}_${image.name}`;
            const storageRef = ref(storage, uniqueFilename);

            // STORAGEに画像をアップロード
            await uploadBytes(storageRef, image);

            // FIRESTOREにデータを追加
            await addDoc(collection(db, 'images'), {
                filename: uniqueFilename,
                title: title,
                content: content,
                timestamp: new Date(),
            });


            setError('Successfully uploaded the image');

        } catch (e) {
            setError(`Error: ${e}`);
        }
    };

    return (
        <div>
            <h1>管理者画面</h1>
            <div>
      <form>
        <input type="file" onChange={handleFileChange} />
        <br />
        <p>タイトル</p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(null);
          }}
        />
        <br />
        <p>内容</p>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setError(null);
          }}
        />
        <br />
        <button style={{ cursor: "pointer", border: "2px solid gray" }} onClick={uploadImage}>
          投稿
        </button>

      </form>
      <p style={{ color: "red" }}>{error && error}</p>
    </div>
        </div>
    );
};
export default Admin;
