import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 py-14 text-left sm:px-6 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            TodoX Workspace
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-6xl">
            Tập trung vào việc cần làm hôm nay.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Header mới đã được gắn vào trang chủ với navigation, tìm kiếm và thao tác tạo công việc.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
