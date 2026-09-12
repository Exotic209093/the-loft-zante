"use client";

import { useState } from "react";
import { menuSections } from "@/lib/drinks-menu";

type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  serving?: string;
  alternate?: { label: string; price: string };
};

export default function MenuBrowser() {
  const [active, setActive] = useState(0);
  const section = menuSections[active];
  return (
    <div className="house-menu" id="cocktail-menu">
      <div
        className="house-menu-nav"
        role="group"
        aria-label="Drinks menu sections"
      >
        {menuSections.map((item, index) => (
          <button
            key={item.name}
            aria-pressed={active === index}
            aria-controls="house-menu-content"
            onClick={() => setActive(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div id="house-menu-content" className="house-menu-content">
        <div className="house-menu-heading">
          <div>
            <p className="eyebrow">O&apos;CALLAGHAN&apos;S LOFT</p>
            <h3>{section.name}</h3>
            <p>{section.subtitle}</p>
          </div>
          <span>EUR</span>
        </div>
        <div className="house-menu-groups">
          {section.groups.map((group) => (
            <section
              className="house-menu-group"
              key={group.name}
              aria-label={group.name}
            >
              <h4>{group.name}</h4>
              <dl>
                {(group.items as MenuItem[]).map((item) => (
                  <div className="house-menu-item" key={item.name}>
                    <dt>
                      <span>{item.name}</span>
                      <span className="menu-leader" aria-hidden="true" />
                    </dt>
                    <dd className="house-menu-price">
                      {item.price}
                      {item.serving && <small>{item.serving}</small>}
                    </dd>
                    {item.desc && (
                      <dd className="house-menu-description">{item.desc}</dd>
                    )}
                    {item.alternate && (
                      <dd className="house-menu-alternate">
                        {item.alternate.label}
                        <span>{item.alternate.price}</span>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <p className="house-menu-footnote">
          Sample menu &amp; prices. Ask the team for today&apos;s selection.
        </p>
      </div>
    </div>
  );
}
