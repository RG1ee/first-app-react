import { useState } from "react";
import "./App.css";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JounalAddButton from "./components/JounalAddButton/JounalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

function App() {
  const INITIAL_DATA = [];
  const [items, setItems] = useState(INITIAL_DATA);

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id: Math.max(...oldItems.map((item) => item.id)) + 1,
        title: item.title,
        text: item.text,
        date: new Date(item.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JounalAddButton />
        <JournalList>
          {items.sort(sortItems).map((item) => (
            <CardButton key={item.id}>
              <JournalItem
                title={item.title}
                date={item.date}
                text={item.text}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
