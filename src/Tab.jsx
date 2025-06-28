import TabItem from "./TabItem.jsx";
import { useState } from "react";

function Tab() {
  const tabs = [
    { id: "tab1", title: "Tab1", description: "Content 1" },
    { id: "tab2", title: "Tab2", description: "Content 2" },
    { id: "tab3", title: "Tab3", description: "Content 3" },
    { id: "tab4", title: "Tab4", description: "Content 4" },
  ];
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "tab1";
  });

  return (
    <div className="app-container">
      <h1 className="titlePrj">Tabs Component With React</h1>

      <div className="tabs">
        <ul>
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              id={tab.id}
              title={tab.title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <div key={tab.id}>
                <p>{tab.description}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Tab;
