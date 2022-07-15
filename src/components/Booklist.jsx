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
  

  console.log(bookData);
//   const key = Object.keys(bookData);
//   console.log(key);  
   
    //Bookdataが取得できたら、それをPタグにレンダリング   
   return (
    <div>
        {bookData === null ? (
            <p>now loading...</p>
        ): (
            
            bookData.data.items.map((x, index) => (
              <div>
                 <div key={index}>
                    <img src={x.volumeInfo.imageLinks.thumbnail}></img>
                 </div> 
                    <ul>  
                        <li key={index}>タイトル：{x.volumeInfo.title}</li>
                        <li key={index}>著者：{x.volumeInfo.authors}</li>
                        <li key={index}>出版社：{x.volumeInfo.publisher}</li>
                        <li key={index}>出版日：{x.volumeInfo.publishedDate}</li>
                        <li key={index}><a href={x.volumeInfo.infoLink}>リンク</a></li>
                    </ul>
               </div>
        ))
    )}
    </div>
   );
} ;
