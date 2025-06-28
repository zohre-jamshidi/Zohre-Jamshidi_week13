function TabItem({ id, title, activeTab, setActiveTab }) {
  const clickHandler = () => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id);
  };
  return (
    <li>
      <button
        onClick={clickHandler}
        className={activeTab === id ? "tab-button active" : "tab-button"}
      >
        {title}
      </button>
    </li>
  );
}

export default TabItem;
