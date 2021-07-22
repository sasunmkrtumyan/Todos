export default function Filter({ ggg }) {
  const handleClick = (e) => {
    ggg(e.target.value);
  };
  return (
    <div className="filter">
      <span>FILTER</span>
      <button value="all" onClick={handleClick} className="btn marg">
        All
      </button>
      <button value="complited" onClick={handleClick} className="btn marg">
        Complited
      </button>
      <button value="uncomplited" onClick={handleClick} className="btn marg">
        Not complited
      </button>
    </div>
  );
}
