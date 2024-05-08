import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";

function App() {
  const data = [
    {
      title: "Заголовок",
      date: new Date(),
      text: "Текст",
    },
    {
      title: "Заголовок 2",
      date: new Date(),
      text: "Текст 2",
    },
  ];

  return (
    <>
      <h1>Заголовок</h1>
      <p>Текст</p>
      <Button />
      <JournalItem
        title={data[0].title}
        date={data[0].date}
        text={data[0].text}
      />
      <JournalItem
        title={data[1].title}
        date={data[1].date}
        text={data[1].text}
      />
    </>
  );
}

export default App;
