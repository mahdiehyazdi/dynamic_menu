import React, { useState } from "react";
const tabData = [
    {
        id: 1,
        title: "level 1",
        content: "Planning your goal: Note your plans in a notebook",
        icon: "/Svg/Item1.svg",
    },
    {
        id: 2,
        title: "Level 2",
        content: "Do your planes: I know it's difficult but continue",
        icon: "/Svg/Item2.svg",
    },
    {
        id: 3,
        title: "Final",
        content: "You have earned your goal: congrats :))",
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
                        {tabData[activeTab - 1].content.split(":")[0]} <br />
                        <img src={tabData[activeTab - 1].icon} />
                    </h1>
                    <h4>my suggestion : {tabData[activeTab - 1].content.split(":").splice(1, 2)}</h4>
                </div>
            ) : (
                <div>
                    <p>if you have a small goal open the menu :)</p>
                    <span className="close__menu__text">Read my suggestion roadmap</span>
                </div>
            )}
        </div>
    );
}
