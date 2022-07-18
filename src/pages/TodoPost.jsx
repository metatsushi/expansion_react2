// src/pages/TodoPost.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const TodoPost = () => {
    // useFormでは、Formで入力（register）された値を、onSubmit（送信）で、
    // handleSubmit関数を呼び出し、postFormData関数を実行する。
    // postFormData関数は何かというと、postDataを入力すると、postDataをJSON StringifyしたものをsetFormDataしろと言っている
    // setFormDataはuseStateフックを使って、formDataを更新する
    // postDataには何が入るか？というと、handleSubmit関数の挙動で、カッコ内の関数(今回はpostFormData)の中に、
    // registerの値を入れるという挙動
    const { register, handleSubmit } = useForm();

    const [formData, setFormData] = useState(null);

    const postFormData = async (postData) => {
        // まずはいきなりサーバーにデータを渡さずにデータが作られているか確認する（下の1行だけ実行）
        setFormData(JSON.stringify(postData));
        // axiosは.の後にpostかgetか、書いてカッコないに（URL、受け渡したいデータ）を書く
        const result = await axios.post ("http://localhost:3001/todo", postData);
        console.log(result);
        return result;
      };

      return (
        <form onSubmit={handleSubmit(postFormData)}>
          <input {...register("todo")} placeholder="Todo" />
          <input {...register("deadline")} placeholder="Deadline" type="date" />
          <input {...register("user_id")} placeholder="User_id" type="number" />
          <p>{formData}</p>
          <button type="submit">送信</button>
        </form>
      );
    };