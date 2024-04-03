import React from "react";
import profile from "./img/profile.jpg";
import PreviewPost  from "./components/PreviewPost";
import useImages from "./hooks/useImages";

export const Home = () => {
    const { allImages, imagesError } = useImages();
        return (
            <>
                <div className="bg-gray-100 rounded-xl w-11/12 px-2 py-2 mx-auto my-8 text-center shadow flex items-center">
                    <img className="rounded-full max-w-lg w-1/3 ml-10 my-4" src={profile} alt="profile"/>
                    <div className="mx-auto">
                        <p className="text-xl">FUJITAKI YU</p>
                        <a className="text-lg text-blue-500 hover:underline" href="https://github.com/yuppy52">GitHub</a>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-xl w-11/12 px-2 py-2 mx-auto my-8 shadow">
                    <h3>投稿一覧</h3>
                    <p style={{ color: "red" }}>{imagesError && imagesError}</p>
                    <div className="container">
                        <div className="row">
                            {allImages.map((image, index) => (
                                <div className="col-4" key={index}>
                                    <PreviewPost image={image} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }