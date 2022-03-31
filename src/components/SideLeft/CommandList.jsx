import React from "react";
import "./CommandList.scss";

const commands = [
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
  {
    command: "!hello",
    description: "just say hello :D",
  },
];

const CommandList = () => {
  return (
    <div className="command-list">
      <h3>Command list:</h3>
      <ul>
        {commands.map((command, index) => {
          return (
            <li key={index} className="command-list__item">
              <p>
                <code>{command.command}: </code>{" "}
                <span>{command.description}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommandList;
