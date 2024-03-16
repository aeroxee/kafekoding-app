export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-[70px] px-4 md:px-16 lg:px-32 mx-auto pb-20 border-b">
      {children}
    </main>
  );
}
