import "./App.css";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JounalAddButton from "./components/JounalAddButton/JounalAddButton";

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
    <div className="app">
      <LeftPanel>
        <Header />
        <JounalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              date={data[0].date}
              text={data[0].text}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
