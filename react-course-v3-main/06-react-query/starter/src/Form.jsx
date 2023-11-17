import { useState } from "react";
import { useCreateTasks } from "./reactQueryHooks";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { createTask, isLoading } = useCreateTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName("");
      },
    });
  };
  return (
    <form action="http://localhost:5000/api/tasks" onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
