import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { toast } from "react-toastify";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: number;
  type: string;
  content: string;
  link?: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  hashtags: string[];
  publishedDate: Date;
}

export function Post({ author, content, hashtags, publishedDate }: PostProps) {
  const [comments, setComments] = useState(["Hey, its really amazing."]);
  const [newComment, setNewComment] = useState("");
  const dateFormated = format(publishedDate, "MMMM d 'at' h:mm a"); // Formatando a data
  const dateRelativeToNow = formatDistanceToNow(publishedDate, {}); // Calculando a relação da data inserida com a atual

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("This field is required");
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newComment]);
    toast.success("💬 Comment added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setNewComment("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDelete = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDelete);
    toast.success("💬 Comment Deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageUrl={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormated} dateTime={publishedDate.toISOString()}>
          Published at {dateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          return item.type === "paragraph" ? (
            <p key={item.id}>{item.content}</p>
          ) : (
            <p key={item.id}>
              {item.content}
              <a href={`https://${item.link}`} target="_blank">
                {" "}
                {item.link}
              </a>
            </p>
          );
        })}
        <p className={styles.hashtags}>
          {hashtags.map((hashtags) => {
            return (
              <a key={hashtags} href="#">
                {" "}
                {hashtags}
              </a>
            );
          })}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <button type="submit">Publicar</button>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              name={author.name}
              content={comment}
              avatar={author.avatarUrl}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
