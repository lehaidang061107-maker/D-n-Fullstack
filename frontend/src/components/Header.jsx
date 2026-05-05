import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Tổng quan", to: "/", icon: LayoutDashboard },
  { label: "Công việc", to: "#tasks", icon: CheckCircle2 },
  { label: "Lịch", to: "#calendar", icon: CalendarDays },
  { label: "Báo cáo", to: "#reports", icon: BarChart3 },
];

const navLinkClass =
  "inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium transition hover:bg-muted hover:text-foreground";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const renderNavItem = (item, isMobile = false) => {
    const Icon = item.icon;
    const className = isMobile
      ? "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition hover:bg-muted hover:text-foreground"
      : navLinkClass;

    if (item.to.startsWith("#")) {
      return (
        <a
          key={item.label}
          href={item.to}
          onClick={closeMenu}
          className={cn(className, "text-muted-foreground")}
        >
          <Icon className="size-4" aria-hidden="true" />
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        key={item.label}
        to={item.to}
        onClick={closeMenu}
        className={({ isActive }) =>
          cn(
            className,
            isActive
              ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
              : "text-muted-foreground",
          )
        }
      >
        <Icon className="size-4" aria-hidden="true" />
        {item.label}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-3 text-left"
          aria-label="TodoX trang chủ"
        >
          <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-foreground text-background shadow-sm transition group-hover:scale-[1.03]">
            <CheckCircle2 className="size-6" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-emerald-500" />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-lg font-semibold leading-6 text-foreground">
              TodoX
            </span>
            <span className="block truncate text-xs font-medium text-muted-foreground">
              Plan. Track. Done.
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-xl border border-border bg-muted/35 p-1 md:flex"
          aria-label="Điều hướng chính"
        >
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#search"
            className="grid size-10 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Tìm kiếm"
          >
            <Search className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#new-task"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            <Plus className="size-4" aria-hidden="true" />
            Tạo việc
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-lg border border-border bg-background text-foreground transition hover:bg-muted md:hidden"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-border bg-background px-4 py-4 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Điều hướng mobile">
            {navItems.map((item) => renderNavItem(item, true))}
          </nav>

          <div className="mx-auto mt-4 grid max-w-6xl grid-cols-[44px_1fr] gap-2">
            <a
              href="#search"
              onClick={closeMenu}
              className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Tìm kiếm"
            >
              <Search className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#new-task"
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <Plus className="size-4" aria-hidden="true" />
              Tạo công việc mới
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
