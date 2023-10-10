import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full bg-slate-200 p-5 rounded grid grid-cols-1 md:flex md:items-center">
      <div className="relative w-10 h-10 rounded-xl">
        <Image
          src="https://www.f-cdn.com/assets/main/en/assets/default-notification-image.svg"
          alt="Zero Commission"
          fill
        />
      </div>
      <div className="p-0 md:px-5">
        <p>
          Welcome User, Get Noticed today by taking our US English Exam - Level
          1
        </p>
        <span>5 minutes ago</span>
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default Dashboard;
