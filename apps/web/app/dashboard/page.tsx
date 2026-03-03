import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to VividStudio</h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="mt-10">
        <p>Your video projects will appear here.</p>
      </div>
    </div>
  );
}
