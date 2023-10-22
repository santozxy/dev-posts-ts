import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/santozxy.png",
      name: "Monnuery Júnior",
      role: "FrontEnd Developer",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content:
          "The importance of programming language choice in web development.",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Selecting the right programming language is crucial for web development projects. Consider the specific requirements of your project, the strength of the support community, and the potential for scalability. Your decision will significantly impact both performance and team productivity, so choose wisely!",
      },
      {
        id: 3,
        type: "link",
        content: "Learn more at ",
        link: "isdeveloper.com.br",
      },
    ],
    hashtags: ["#WebDevelopment", "#ProgrammingLanguages", "#FrontEnd"],
    publishedDate: new Date("2023-10-21 18:52:46"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/VrBnDev.png",
      name: "Vitória Rafaela",
      role: "Data Scientist",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content:
          "If you're in search of a highly skilled collaborator in the field of data science, look no further.",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "I highly recommend Monnuery Júnior, a talented FrontEnd Developer known for his exceptional problem-solving skills and dedication to delivering top-notch results.",
      },
      {
        id: 3,
        type: "link",
        content: "Explore Monnuery's work at his portfolio:",
        link: "isdeveloper.com.br",
      },
    ],
    hashtags: ["#DataScience", "#FrontEnd", "#Collaboration"],
    publishedDate: new Date("2023-10-20 19:22:46"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/Jpedro23.png",
      name: "João Pedro",
      role: "Software Engineer",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content:
          "In the realm of software engineering, finding a reliable and skillful professional is essential.",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "I wholeheartedly recommend Monnuery Júnior, a FrontEnd Developer renowned for his problem-solving abilities, attention to detail, and commitment to delivering high-quality software solutions.",
      },
      {
        id: 3,
        type: "link",
        content: "Discover Monnuery's work on his portfolio:",
        link: "isdeveloper.com.br",
      },
    ],
    hashtags: ["#SoftwareEngineering", "#FrontEnd", "#Recommendation"],
    publishedDate: new Date("2023-10-19 20:00:01"),
  },
];

export function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => {
            return (
              <Post
                key={item.id}
                author={item.author}
                content={item.content}
                hashtags={item.hashtags}
                publishedDate={item.publishedDate}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
