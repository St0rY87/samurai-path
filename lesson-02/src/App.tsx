function App() {
  const tracks = [
    {
      id: 1,
      title: "Musicfun soundtrack",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 2,
      title: "Musicfun soundtrack instrumental",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
  ];

  return (
    <>
      <h1>Musicfun player</h1>
      <ul>
        {tracks.map(({ title, url, id }) => {
          return (
            <li key={id}>
              <div>{title}</div>
              <audio controls src={url}></audio>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
