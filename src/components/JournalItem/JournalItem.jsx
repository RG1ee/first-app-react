import "./JournalItem.css";

function JournalItem() {
  const title = "Заголовок";
  const date = "Дата";
  const text = "Текст";

  return (
    <div className="journal-item">
      <h2 className="journal-item__title">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{date}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </div>
  );
}

export default JournalItem;
