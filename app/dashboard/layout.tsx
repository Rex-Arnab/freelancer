"use client";

import AvatarCard from "@/components/Avatar";
import Logo from "@/components/Logo";
import { NavigationMenuDemo } from "@/components/mega-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Bell,
  Briefcase,
  Clock5,
  Folder,
  Glasses,
  Home,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Search,
  ShieldCheck,
  Users
} from "lucide-react";
import { GraphHelpers } from "next/dist/compiled/webpack/webpack";
import Image from "next/image";

interface MenuItemProps {
  title: string;
  active?: boolean;
}

const MenuItem = ({ title, active }: MenuItemProps) => {
  return (
    <div
      className={cn(
        "font-bold border-b-4 border-black hover:border-white cursor-pointer py-2",
        active ? "border-white" : "border-transparent"
      )}>
      {title}
    </div>
  );
};

interface FooterMenuCardProps {
  Icon: any;
  active?: boolean;
}

const FooterMenuCard = ({ Icon, active }: FooterMenuCardProps) => {
  return (
    <div
      className={cn(
        "p-2 border-t-4 border-transparent",
        active && " border-primary"
      )}>
      <Icon />
    </div>
  );
};

interface BalanceCardProps {
  title: string;
  image: string;
}

const BalanceCard = ({ title, image }: BalanceCardProps) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-2">
        <Image src={image} alt={title} width={24} height={24} />
        <h1>{title}</h1>
      </div>
      <div className="flex items-center space-x-1">
        <span>{title === "Indian Rupee" ? "₹" : "$"}</span>
        <span>0.00</span>
      </div>
    </div>
  );
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="flex items-center justify-between space-x-2 p-2 w-full lg:max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Logo width={150} height={100} />
          <NavigationMenuDemo />
        </div>

        <div className="flex items-center space-x-5">
          <Bell size={24} />
          <Folder size={24} />
          <MessageSquare size={24} />
          <div className="lg:flex items-center space-x-2 lg:space-x-5 hidden">
            <Button
              variant="outline"
              className="border-red-500 text-pink-700 font-bold hover:text-pink-800">
              Quote
            </Button>
            <Button className="bg-pink-700 hover:bg-pink-800">
              Post a Project
            </Button>
            <AvatarCard />
            <div className="grid w-fit">
              <span>username</span>
              <span className="flex space-x-2 items-center">₹ 0.00 INR</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="bg-black text-white hidden lg:block">
        <div className="flex items-center space-x-5 max-w-7xl mx-auto text-md">
          <MenuItem title="Dashboard" active={true} />
          <MenuItem title="Lists" />
          <MenuItem title="Tasklists" />
          <MenuItem title="My Projects" />
          <MenuItem title="Inbox" />
          <MenuItem title="Feedback" />
          <MenuItem title="Free Credit" />
        </div>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] w-full lg:max-w-7xl mx-auto">
        <main className="p-5 min-h-screen">{children}</main>

        <aside className="hidden md:block p-5">
          <div className="flex items-center justify-between">
            <h1>Setup your account</h1>
            <span>50% done</span>
          </div>
          <div className="from-blue-400 to-blue-900 bg-gradient-to-r h-2 rounded-full w-full my-2"></div>
          <p>
            Having a complete verified account will increase the chances of
            getting jobs.
          </p>
          <Separator className="my-5" />
          <h1>Complete your account setup by:</h1>
          <Button variant="outline" className="p-5 border-pink-500 space-x-2">
            <ShieldCheck size={24} />
            <span className="text-md">Pass the US English Exam - Level 1</span>
            <span>+ 20%</span>
          </Button>
          <Separator className="my-5" />
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Balances</h1>
            <div className="text-pink-500 flex space-x-2 items-center hover:underline cursor-pointer">
              <PlusCircle size={20} className="font-bold" />
              <span>Add Funds</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <BalanceCard
              title="Indian Rupee"
              image="https://www.f-cdn.com/assets/main/en/assets/flags/in.png"
            />
            <BalanceCard
              title="US Dollar"
              image="https://www.f-cdn.com/assets/main/en/assets/flags/us.png"
            />
          </div>
          <Separator className="my-5" />

          <div className="flex items-center justify-between">
            <h1 className="font-bold">Free Member</h1>
            <div className="text-pink-500 flex space-x-2 items-center hover:underline cursor-pointer">
              <AreaChart size={20} className="font-bold" />
              <span>Insights</span>
            </div>
          </div>

          <p className="flex items-center space-x-2">
            <span>
              <span className="font-semibold">6 bids left</span> out of 6
            </span>
            <Clock5 size={20} className="font-bold" />
          </p>

          <Separator className="my-5" />

          <div className="relative w-full h-96">
            <Image
              src="https://www.f-cdn.com/assets/main/en/assets/dashboard/widgets/zero-commission/zero-commission-v3.png"
              alt="Zero Commission"
              fill
            />
          </div>

          <Separator className="my-5" />

          <section className="space-y-5">
            <h1 className="font-bold">Polls</h1>

            <p>
              What new skills would you like to see added, so you could bid on
              that type of work?
            </p>

            <Textarea />

            <div className="flex items-center justify-between">
              <Button>Submit Answer</Button>
              <span>Skip Question</span>
            </div>
          </section>
        </aside>
      </div>

      <footer className="bg-white md:hidden fixed bottom-0 border-2 w-full flex justify-between px-2 md:px-5">
        <FooterMenuCard Icon={Home} active={true} />
        <FooterMenuCard Icon={Search} />
        <FooterMenuCard Icon={Briefcase} />
        <FooterMenuCard Icon={Users} />
        <FooterMenuCard Icon={Plus} />
        <FooterMenuCard Icon={Menu} />
      </footer>
    </div>
  );
}

export default Layout;
