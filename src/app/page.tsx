import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col gap-8 rounded-3xl border border-black/10 px-6 py-10 dark:border-white/15">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
