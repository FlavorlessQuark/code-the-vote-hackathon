import { useEffect } from "react";
import styled from "styled-components";
import AchievementCard from "./QuestCard";
import QuestCard from "./QuestCard";

const QuestView = () => {
  const dummyquests = [
    {
      id: 0,
      title: "WeeklyRoutine",
      desc: "Attend a Council Meeting this week",
      progress: [
        {
          desc: "Attend a meeting",
          completed: true,
        },
      ],
      rewards: { xp: 50 },
      claimed: true,
      completed: true,
    },
    {
      id: 1,
      title: "WeeklyRoutine2",
      desc: "Ask a question in a meeting this week",
      progress: [
        {
          desc: "Ask a Question",
          completed: true,
        },
      ],
      rewards: { xp: 50 },
      claimed: false,
      completed: true,
    },
    {
      id: 2,
      title: "I've done it all",
      desc: "Chat, ask a question, and vote on a poll during the same meeting",
      progress: [
        {
          desc: "Chat in a meeting",
          completed: true,
        },
        {
          desc: "Ask a question in a meeting",
          completed: false,
        },
        {
          desc: "Vote in a meeting",
          completed: false,
        },
      ],
      rewards: { xp: 200 },
      claimed: false,
      completed: false,
    },
  ];

  return (
    <DisplaySection>
      {dummyquests.map((e) => (
        <QuestCard key={e.id} data={e} />
      ))}
    </DisplaySection>
  );
};

export default QuestView;

const DisplaySection = styled.div`
    width: 100%;
    display: flex;
    flex-firection: row;
    gap: 30px;
    flex-wrap: wrap;
    min-height: 500px;
    height: fit-content;
    border: 1px solid black;
    padding: 20px 20px;
    box-sizing: border-box;

`;
