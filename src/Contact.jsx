import React from "react";

export const Contact = () => {
        return (
            <>
            <div className="bg-gray-100 rounded-xl w-11/12 px-2 py-2 mx-auto my-8 text-center shadow">
                <h2 className="text-xl">お問い合わせ</h2>
                <form className="lg:mx-5" action="https://hyperform.jp/api/3E5aY0JK" method="POST">
                    <label htmlFor="name" className="block mt-4">
                        <span className="text-gray-700">お名前</span>
                        <input type="text" name="name" id="name" className="form-input mt-1 block w-full" placeholder="山田太郎" />
                    </label>
                    <label htmlFor="email" className="block mt-4">
                        <span className="text-gray-700">メールアドレス</span>
                        <input type="email" name="email" id="email" className="form-input mt-1 block w-full" placeholder="***@***.***" />
                    </label>
                    <label htmlFor="お問合わせ内容" className="block mt-4">
                        <span className="text-gray-700">お問合わせ内容</span>
                        <textarea name="お問合わせ内容" id="お問合わせ内容" rows="3" className="form-textarea mt-1 block w-full" placeholder="お問合わせ内容を入力してください"></textarea>
                    </label>
                    <span className="block mt-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">送信</button>
                    </span>
                </form>
        
            </div>
            </>
        );
    }