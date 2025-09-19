import { useState } from "react";
import "./App.css";

const selectedTrackId = 1;

const tracks = [
  {
    id: 1,
    title: "Musicfun soundtrack",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    id: 2,
    title: "Musicfun soundtrack instrumental",
    url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
];

function Player() {
  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun player, it-incubator</h1>
        <span>Loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun player, it-incubator</h1>
        <span>No tracks</span>
      </div>
    );
  }

  return (
    <div>
      <h1>Musicfun player, it-incubator</h1>
      <ul>
        {tracks.map(
          (
            track // алгоритм
          ) => (
            <li
              key={track.id}
              // style={track.isSelected ? { border: "1px solid tomato" } : null}
              style={{
                border:
                  track.id === selectedTrackId ? "1px solid tomato" : "none",
              }}
            >
              <div>{track.title}</div>
              <audio controls src={track.url}></audio>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function Task({ task }) {
  return (
    <li>
      <article
        className="task"
        style={{
          backgroundColor:
            task.priority > 1 && task.priority < 5 ? "orange" : "none",
        }}
      >
        <p
          style={{ textDecorationLine: task.isDone ? "line-through" : "none" }}
        >
          <b>Заголовок: </b>
          {task.title}
        </p>
        <div>
          <span>
            <b>Статус </b>
          </span>
          <input type="checkbox" checked={task.isDone} />
        </div>
        <p>
          <span>
            <b>Дата создания задачи: </b>
          </span>
          {task.addedAt}
        </p>
      </article>
    </li>
  );
}

function App() {
  if (tasks === null) return "Загрузка";
  if (tasks.length === 0) return "Задачи отсутствуют";
  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

export default App;
