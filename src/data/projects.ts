import type { Project } from "../types/project";

const projects: Project[] = [
  {
    name: "QuizApp",
    description:
      "QuizApp is an interactive quiz platform featuring 18 categories, designed to make knowledge engaging.",
    tech: ["HTML", "CSS", "React"],
    repoUrl: "https://github.com/SafieDeme9/quizapp",
    liveUrl: "https://ndqx4r.csb.app/",
    image: { src: "/images/quizapp.png", alt: "Screenshot of QuizApp", width: 1920, height: 816 },
  },
  {
    name: "Safchat",
    description:
      "LLM powered telegram chatbot. It will help you learn italian. It translate from English to Italian and holds a conversation.",
    tech: ["Python", "Docker", "HuggingFace"],
    repoUrl: "https://github.com/SafieDeme9/safchat",
    liveUrl: "https://t.me/safchatbot_bot",
    image: { src: "/images/safbot.png", alt: "Screenshot of the Safchat Telegram chatbot", width: 1915, height: 1004 },
  },
  {
    name: "Tictactoe",
    description:
      "A simple tictactoe game I coded to play with my little brother.",
    tech: ["Python", "Pygame"],
    repoUrl: "https://github.com/SafieDeme9/tictactoe",
    liveUrl: "https://replit.com/@SafietouDeme/tictactoe",
    image: { src: "/images/tictactoe.png", alt: "Screenshot of the Tictactoe game", width: 1290, height: 756 },
  },
];

export default projects;
