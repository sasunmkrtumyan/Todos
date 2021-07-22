import Filter from "./Filter";

export default function TodoFooter({ todos, setFilteredBy, ggg}) {
  const complitedLength = todos.filter((el) => el.isCompleted).length;
  return (
    <div className="list">
      <span>
        {complitedLength}/{todos.length}
      </span>
      <Filter todos={todos} ggg={ggg}/>
    </div>
  );
}
