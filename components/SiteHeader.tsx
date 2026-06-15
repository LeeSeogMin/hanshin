"use client";

import { useState } from "react";
import { Menu, MessageSquareText, X } from "lucide-react";
import { menuItems, type MenuKey } from "@/lib/content";

type SiteHeaderProps = {
  activeKey?: MenuKey;
  boardActive?: boolean;
  onChooseMenu?: (key: MenuKey) => void;
};

export function SiteHeader({ activeKey, boardActive = false, onChooseMenu }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const brandHref = boardActive ? "/" : "#top";

  const chooseMenu = (key: MenuKey) => {
    onChooseMenu?.(key);
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href={brandHref} aria-label="한신대 학사구조개편 공론화 홈">
          <span className="brand-mark">ㅎ</span>
          <span>
            <strong>한신대 학사구조개편</strong>
            <small>공론화 자료</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="주 메뉴">
          {menuItems.map((item) =>
            onChooseMenu ? (
              <button
                key={item.key}
                className={item.key === activeKey ? "nav-button active" : "nav-button"}
                type="button"
                onClick={() => chooseMenu(item.key)}
              >
                <item.icon aria-hidden="true" size={18} />
                {item.label}
              </button>
            ) : (
              <a key={item.key} className="nav-button" href={`/?topic=${item.key}#agenda`}>
                <item.icon aria-hidden="true" size={18} />
                {item.label}
              </a>
            )
          )}
          <a className={boardActive ? "nav-button active" : "nav-button"} href="/board">
            <MessageSquareText aria-hidden="true" size={18} />
            자유게시판
          </a>
        </nav>
        <button
          className="icon-button mobile-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen ? (
        <nav className="mobile-nav" aria-label="모바일 메뉴">
          {menuItems.map((item) =>
            onChooseMenu ? (
              <button
                key={item.key}
                className={item.key === activeKey ? "mobile-nav-button active" : "mobile-nav-button"}
                type="button"
                onClick={() => chooseMenu(item.key)}
              >
                <item.icon aria-hidden="true" size={18} />
                <span>{item.label}</span>
              </button>
            ) : (
              <a
                key={item.key}
                className="mobile-nav-button"
                href={`/?topic=${item.key}#agenda`}
                onClick={closeMobile}
              >
                <item.icon aria-hidden="true" size={18} />
                <span>{item.label}</span>
              </a>
            )
          )}
          <a
            className={boardActive ? "mobile-nav-button active" : "mobile-nav-button"}
            href="/board"
            onClick={closeMobile}
          >
            <MessageSquareText aria-hidden="true" size={18} />
            <span>자유게시판</span>
          </a>
        </nav>
      ) : null}
    </>
  );
}
