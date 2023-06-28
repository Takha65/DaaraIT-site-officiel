import React, { useEffect, useState } from "react";
import "./Tab.css";

const Tab = ({ children, state, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);
  
  useEffect(() => {
    return () => {
      setActiveTab(state)
    }
  }, [state])
  
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 p-5 items-start justify-start bg-[#F2F2F2]">
      <ul className="w-[350px] flex flex-col sticky top-12">
        {tabsData.map(({ tab }, idx) => (
          <button key={idx} className={`group h-8 mb-2 px-3 text-xs hover:bg-[#2359AD] hover:text-white hover:scale-[1.02] hover:translate-x-[4px] duration-300 shadow-sm rounded flex items-center justify-between ${idx === activeTab ? "active bg-[#1852ff] text-white hover:text-yellow-400" : "bg-white"}`} onClick={() => { setActiveTab(idx) }}>
              <div>{tab}</div>
              <p className="text-xs">{">"}</p>
          </button>
        ))}
      </ul>
      <div className={`w-full h-full`}>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;