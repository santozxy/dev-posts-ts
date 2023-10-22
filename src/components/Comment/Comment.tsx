import { useState } from "react";
import styles from "./Comment.module.css";
import { Heart, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

interface CommentProps {
  name: string;
  content: string;
  onDeleteComment: (comment: string) => void;
  avatar: string;
}

export function Comment({
  name,
  avatar,
  content,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(24);
  function handleLikeCount() {
    setLikeCount((state) => state + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar border={false} imageUrl={avatar} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{name}</strong>
              <time
                title="21 de Novembro as 18:52"
                dateTime="2023-10-21 18:52:46"
              >
                Publicado há 1H
              </time>
            </div>
            <button
              onClick={() => onDeleteComment(content)}
              title="Deletar comentário"
            >
              <Trash size={25} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <Heart />
            Curtir・<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
