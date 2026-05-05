import { Link } from "react-router-dom";
import { ArrowLeft, Compass, Home, SearchX } from "lucide-react";

const quickLinks = [
  { label: "Trang chủ", to: "/", icon: Home },
  { label: "Tìm công việc", to: "/#tasks", icon: SearchX },
  { label: "Lịch làm việc", to: "/#calendar", icon: Compass },
];

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <div className="absolute inset-x-0 top-0 h-48 border-b border-border bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_55%)]" />
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <section className="relative w-full max-w-2xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
          <span className="size-2 rounded-full bg-emerald-500" />
          Error 404
        </div>

        <div className="mx-auto mt-8 grid size-24 place-items-center rounded-2xl border border-border bg-muted/60 shadow-sm">
          <SearchX className="size-12 text-muted-foreground" aria-hidden="true" />
        </div>

        <h1 className="mx-auto mt-8 max-w-xl text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
          Trang này không nằm trong kế hoạch.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted-foreground">
          Đường dẫn bạn vừa mở không tồn tại, đã bị đổi tên hoặc chưa được thêm vào TodoX.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 sm:w-auto"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Về trang chủ
          </Link>
          <a
            href="mailto:support@todox.app"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto"
          >
            Báo lỗi đường dẫn
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                to={item.to}
                className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground transition group-hover:bg-background group-hover:text-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default NotFound;
