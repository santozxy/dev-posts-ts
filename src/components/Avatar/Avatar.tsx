import styles from "./Avatar.module.css";
interface AvatarProps {
  border?: boolean;
  imageUrl: string;
}
export function Avatar({ border = true, imageUrl }: AvatarProps) {
  const showBorder = border ? styles.avatarWithBorder : styles.avatar;
  return <img className={showBorder} src={imageUrl} />;
}
