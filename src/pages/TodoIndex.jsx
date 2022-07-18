// src/pages/TodoIndex.jsx

import { useState, useEffect } from "react";
import axios from "axios";

// ページの中のパーツを切り出してTodoコンポーネントにしたのでそれを呼び出す
import { Todo } from "../components/Todo";

export const TodoIndex = () => {
    //ダミーデータではなく、サーバーなど外部から指示してとってきたデータ（関数）だと変化値が検出されるため、
    // とってきたデータはuseStateで管理する（関数コンポーネントはStateを持てないため）
    // とってくる処理はuseEffectを使う（無限ループになるため）
  
    // 世の中的にはフロントとサーバーサイドは別で作るのでフロントサイドはダミーのデータを作って使う
    const dummyTodoList = [
        {
          id: 1,
          todo: "test1",
          deadline: "2022-02-02",
          user_id: "1",
          id_done: false,
          created_at: JSON.stringify(new Date()),
          updated_at: JSON.stringify(new Date()),
        },
        {
          id: 2,
          todo: "test2",
          deadline: "2022-02-22",
          user_id: "2",
          id_done: false,
          created_at: JSON.stringify(new Date()),
          updated_at: JSON.stringify(new Date()),
        },
        {
          id: 3,
          todo: "test3",
          deadline: "2022-02-28",
          user_id: "3",
          id_done: false,
          created_at: JSON.stringify(new Date()),
          updated_at: JSON.stringify(new Date()),
        },
    ];
    
    // 最初はダミーデータ入れていたが、サーバーから取ってくる場合は最初はNull
    // Nullで配列がないと後段でマップ関数が使えないので、？（オプショナルチェーン）を使う
    // または初期値をNULLではなく[]空配列としてもOK
    const [todoList, setTodolist] = useState(null);

    const getAllTodo = async () => {
        // axios.getの場合はURLだけ引数に入れればOK
        const result = await axios.get("http://localhost:3001/todo");
        // とってきたresultを全部使わないので絞る。result.data.resultをtodoListにセットする
        setTodolist(result.data.result);
        return result;
        
    };

    // いきなりgetAllTodo()関数をそのまま使ってしまうと無限ループになる
    // 読み込み時に1回だけ動作させるためには、上件を[]とする。これで1回だけ動作する
    useEffect(() => {
        getAllTodo();
    }, []);


    return (
        <ul>
            {/* 配列からHTML要素を作りたいのでmap関数使う */}
            {/* todoListが最初はNULLなのでエラーが出ないように？（オプショナルチェーン）を使う */}
            {/* todoListには、useStateによって、setTodolist関数でresult.data.resultがセット（格納）されている*/}
            {todoList?.map((x) => (
            //  表示の仕方はTodoコンポーネントに任せ、ここではTodoコンポーネントで定めた変数の中身のみを指定する
            // Todoコンポーネントを参照する、と言ったときに変数の値を設定するときは＜＞の中で書く
               <Todo 
                    id={x.id}
                    todo={x.todo}
                    deadline={x.deadline}
                    is_done={x.is_done}
                    user_id={x.user_id}
                    created_at={x.created_at}
                    updated_at={x.updated_at}
                />
               
            ))}
        </ul>
        );

    };