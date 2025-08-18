import Logo from "@/assets/Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Logo className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">MyApp</span>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/user" className="hover:underline">
            User
          </a>
        </li>
        <li>
          <a href="/tasks" className="hover:underline">
            Tasks
          </a>
        </li>
      </ul>
    </nav>
  );
}
