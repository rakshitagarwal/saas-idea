import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";


export default function DocsLayout({ children }) {
  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ScrollArea className="h-full py-6 pr-6 lg:py-8">
          <DocsSidebarNav />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
