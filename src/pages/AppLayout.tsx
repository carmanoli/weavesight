import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { KnowledgeMap } from '@/components/custom/KnowledgeMap';


export function AppLayout() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 border-b shrink-0 bg-background/80 backdrop-blur-sm">
        
        {/* Lado Esquerdo: Burger Menu para Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>WeaveSight</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-2 py-4 text-lg font-medium">
                <a href="#" className="hover:text-primary">Dashboard</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Projects</a>
                <a href="#" className="text-muted-foreground hover:text-primary">Settings</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Lado Esquerdo: Logotipo para Desktop (opcional) */}
        <div className="hidden lg:block">
          <a href="/" className="text-xl font-bold">WeaveSight</a>
        </div>

        {/* Centro: Título da Página Atual */}
        <div className="absolute transform -translate-x-1/2 left-1/2">
          <h1 className="text-lg font-semibold text-muted-foreground">Knowledge Mapping</h1>
        </div>

        {/* Lado Direito: Perfil do Utilizador */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative w-10 h-10 rounded-full">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CMO</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* ================= SIDEBAR + CONTEÚDO PRINCIPAL ================= */}
      <div className="flex flex-1 h-full pt-16">
        {/* Sidebar para Desktop */}
        <aside className="hidden w-64 border-r lg:block">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="px-4 text-lg font-semibold tracking-tight">Menu</h2>
            <nav className="grid gap-1">
              <a href="#" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground">Dashboard</a>
              <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">Projects</a>
              <a href="#" className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted">Settings</a>
            </nav>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-4 overflow-auto">
 <KnowledgeMap />
        </main>
      </div>
    </div>
  );
}