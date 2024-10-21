import UserDataSection from "@/components/profile/userData";

export default function Settings() {
  return (
    <main className="grid place-items-center h-screen w-full">
      <div className="md:w-3/6 w-full ">
        <UserDataSection />
      </div>
    </main>
  );
}
