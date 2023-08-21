import React, { useState } from "react";
const tabData = [
    {
        id: 1,
        title: "ITEM 1",
        content: "Authorize the user data",
        icon: "/Svg/Item1.svg",
    },
    {
        id: 2,
        title: "ITEM 2",
        content: "Redirect user to cart page",
        icon: "/Svg/Item2.svg",
    },
    {
        id: 3,
        title: "ITEM 3",
        content: "Create new payment for the user",
        icon: "/Svg/Item3.svg",
    },
];
export default function Menu() {
    const [activeTab, setActiveTab] = useState(1);
    const [menuActive, setMenuActive] = useState(false);
    const HandleTab = (id) => {
        setActiveTab(id);
    };
    return (
        <div>
            <img src="Svg/menu.svg" onClick={() => setMenuActive(!menuActive)} />
            {menuActive ? (
                <div className="menu">
                    <div className="menu__button">
                        {tabData.map((item) => (
                            <button onClick={() => HandleTab(item.id)} key={item.id} className={activeTab === item.id ? "active" : ""}>
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>
                    <h1>
                        {tabData[activeTab - 1].content}
                        <img src={tabData[activeTab - 1].icon} />
                    </h1>
                </div>
            ) : (
                <p>open the menu</p>
            )}
        </div>
    );
}
