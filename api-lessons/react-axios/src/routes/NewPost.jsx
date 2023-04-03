import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewPost = () => {
  const Navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });
    Navigate("/");
  };
  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o Conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" className="btn" value="Criar post" />
      </form>
    </div>
  );
};

export default NewPost;
