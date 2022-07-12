// Booklist.jsx

import { useState, useEffect } from "react";

// Booklistコンポーネントでは、LanguageとGetDataを引数として関数を設定
// まずは空のBookDataを用意し、それをsetBookDataで更新していく
export const Booklist = ({ language, getData }) => {
   const [bookData, setBookData] = useState(null);
   
    // GetData（APIにキーワードのLanguageを入れた結果の戻り値）があったら、その結果をSetBookDataに代入
    // なお、Languageとその結果としてGetDataが変わった時だけ更新するものとする
    useEffect(() => {
    //このresultがbookDataでなくても良い理由がよくわからない 
    const result = getData?.(language).then((response) => 
        setBookData(response)
    );
   }, [language, getData]);
   
    //Bookdataが取得できたら、それをPタグにレンダリング   
   return (
    <ul>
        {bookData === null ? (
            <p>now loading...</p>
        ): (
            
            bookData.data.items.map((x, index) => (
               <li key={index}>{x.volumeInfo.title}</li>
        ))
    )}
    </ul>
   );
} ;
