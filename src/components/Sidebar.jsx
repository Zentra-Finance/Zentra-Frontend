"use client"

import * as React from "react"
import {
  Wallet,
  Rocket,
  BarChart3,
  Layers,
  Coins,
  Users,
  FlagIcon,
  Lock,
  HelpCircle,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Zap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenuButton,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Navigation items with icons
const viewItems = [
  { name: "Launchpad", href: "#", icon: Rocket },
  { name: "Sol Launch", href: "#", icon: Layers },
  { name: "$DEFI 🔥", href: "#", icon: BarChart3 },
  { name: "Staking", href: "#", icon: Coins },
  { name: "Portfolio", href: "#", icon: Wallet },
]

const createItems = [
  { name: "Meme Coin 🔥", href: "#", icon: Coins },
  { name: "Fair Launch", href: "#", icon: Users },
  { name: "Pump Launch", href: "#", icon: BarChart3 },
  { name: "Airdrop", href: "#", icon: FlagIcon },
  { name: "Lock", href: "#", icon: Lock },
  { name: "Create", href: "#", icon: null },
  { name: "Token List", href: "#", icon: null },
  { name: "LP List", href: "#", icon: null },
]

const helpItems = [{ name: "HELP", href: "#", icon: HelpCircle }]

export function SidebarLayout({ children, className }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col bg-[#0d1117] w-full">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <MainContent className={className}>{children}</MainContent>
        </div>
      </div>
    </SidebarProvider>
  );
}

// Separate component for the main content to use useSidebar hook safely
function MainContent({ children, className }) {
  return (
    <SidebarInset className={cn("flex-1 bg-[#0d1117] text-white", className)}>
      <div className="p-6">
        {/* <ToggleSidebarButton /> */}
        {children}
      </div>
    </SidebarInset>
  );
}

function ToggleSidebarButton() {
  const { state, toggleSidebar } = useSidebar()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleSidebar}
      className="mb-6 border-[#1e2a3b] bg-[#111827] text-white hover:bg-[#1e2a3b]"
    >
      <Menu className="mr-2 h-4 w-4" />
      {state === "collapsed" ? "Expand" : "Collapse"} Sidebar
    </Button>
  )
}

function ZentraLogo() {
  return (
    <div className="flex items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4]">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <span className="ml-2 text-xl font-bold tracking-tight text-white">Zentra</span>
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e2a3b] bg-[#111827] bg-opacity-80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex justify-between space-x-6">
          <ZentraLogo />

          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {["Dashboard", "Markets", "Trade", "Earn"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-[#1e2a3b] hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden items-center rounded-lg border border-[#1e2a3b] bg-[#0d1117] px-3 py-1.5 md:flex">
            <span className="text-xs font-medium text-gray-400">MARKET CAP</span>
            <span className="ml-1.5 text-xs font-semibold text-[#06b6d4]">$24,055</span>
          </div>

          <Button
            size="sm"
            className="hidden h-9 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-xs font-medium text-white hover:opacity-90 md:flex"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            BUY $DEFI
          </Button>

          <Button
            size="sm"
            className="h-9 rounded-lg bg-[#1e2a3b] px-4 text-sm font-medium text-white hover:bg-[#2d3a4b]"
          >
            Connect Wallet
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-[#1e2a3b] bg-[#111827] px-4 py-3 md:hidden">
          <nav>
            <ul className="space-y-2">
              {["Dashboard", "Markets", "Trade", "Earn"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#1e2a3b] hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-[#1e2a3b] bg-[#0d1117] px-3 py-2">
              <span className="text-sm font-medium text-gray-400">MARKET CAP</span>
              <span className="text-sm font-semibold text-[#06b6d4]">$24,055</span>
            </div>
            <Button
              size="sm"
              className="mt-3 w-full rounded-lg bg-gradient-to-r from-[#6366f1] to-[#06b6d4] py-2 text-sm font-medium text-white hover:opacity-90"
            >
              <Sparkles className="mr-1.5 h-4 w-4" />
              BUY $DEFI
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-[#1e2a3b] bg-[#111827] text-white">
      <SidebarHeader className="border-b border-[#1e2a3b] p-4">
        <div className="flex items-center justify-between">
          <ZentraLogo />
          <SidebarTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1e2a3b] text-gray-400 hover:bg-[#2d3a4b] hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-6 p-3">
        {/* VIEW SECTION */}
        <div>
          <div className="mb-3 flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">View</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1e2a3b] to-transparent ml-2"></div>
          </div>
          <div className="space-y-1">
            {viewItems.map((item) => (
              <SidebarMenuButton
                key={item.name}
                asChild
                className="w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-[#1e2a3b] hover:to-[#1e2a3b]/50 data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#6366f1]/20 data-[active=true]:to-transparent data-[active=true]:border-l-2 data-[active=true]:border-[#06b6d4]"
              >
                <a href={item.href} className="flex items-center">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#06b6d4]" />
                  </div>
                  <span className="ml-3 transition-all">{item.name}</span>
                </a>
              </SidebarMenuButton>
            ))}
          </div>
        </div>

        {/* CREATE SECTION */}
        <div>
          <div className="mb-3 flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Create</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1e2a3b] to-transparent ml-2"></div>
          </div>
          <div className="space-y-1">
            {createItems.map((item, index) =>
              item.icon ? (
                <SidebarMenuButton
                  key={item.name}
                  asChild
                  className="w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-[#1e2a3b] hover:to-[#1e2a3b]/50 data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#6366f1]/20 data-[active=true]:to-transparent data-[active=true]:border-l-2 data-[active=true]:border-[#06b6d4]"
                >
                  <a href={item.href} className="flex items-center">
                    <div className="flex h-5 w-5 items-center justify-center">
                      <item.icon
                        className={cn("h-5 w-5", item.name.includes("Meme") ? "text-[#6366f1]" : "text-[#06b6d4]")}
                      />
                    </div>
                    <span className="ml-3 transition-all">{item.name}</span>
                  </a>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton
                  key={item.name}
                  asChild
                  className="w-full rounded-lg pl-11 pr-3 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-[#1e2a3b]/50 hover:text-white"
                >
                  <a href={item.href} className="flex items-center">
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              ),
            )}
          </div>
        </div>

        {/* HELP SECTION */}
        <div className="mt-auto">
          <div className="mb-3 flex items-center justify-between px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Support</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1e2a3b] to-transparent ml-2"></div>
          </div>
          <div className="space-y-1">
            {helpItems.map((item) => (
              <SidebarMenuButton
                key={item.name}
                asChild
                className="w-full rounded-lg bg-gradient-to-r from-[#6366f1]/10 to-transparent px-3 py-2.5 text-sm font-medium transition-all hover:from-[#6366f1]/20 hover:to-[#06b6d4]/10"
              >
                <a href={item.href} className="flex items-center">
                  <div className="flex h-5 w-5 items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#6366f1]" />
                  </div>
                  <span className="ml-3">{item.name}</span>
                </a>
              </SidebarMenuButton>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#1e2a3b] p-4">
        <div className="flex items-center">
          <h4 className="text-sm text-[#06b6d4]">
           Zentra
          </h4>
        </div>
      </SidebarFooter>
      <SidebarRail className="after:bg-[#1e2a3b] hover:after:bg-[#2d3a4b]" />
    </Sidebar>
  )
}

