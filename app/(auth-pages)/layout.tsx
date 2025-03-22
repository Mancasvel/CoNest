export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center justify-start pt-20 px-6">
        {children}
      </main>
    </div>
  );
}
