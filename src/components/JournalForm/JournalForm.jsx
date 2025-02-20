import "./JournalForm.css";
import Button from "../Button/Button";

function JournalForm({ onSubmit }) {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id=""></textarea>
      <Button
        text="Сохранить"
        onClick={() => {
          console.log("asdlfkajsdf");
        }}
      />
    </form>
  );
}

export default JournalForm;
