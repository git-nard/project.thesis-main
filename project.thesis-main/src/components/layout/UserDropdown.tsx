import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdown = () => {
  return (
     <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
            <i className="fa-solid fa-user text-gray-700"></i>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <a href="/profile" className="flex items-center w-full">
              <i className="fa-solid fa-id-card mr-2 text-gray-500"></i>
              <span>Profile</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/itineraries" className="flex items-center w-full">
              <i className="fa-solid fa-route mr-2 text-gray-500"></i>
              <span>My Itineraries</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/saved" className="flex items-center w-full">
              <i className="fa-solid fa-bookmark mr-2 text-gray-500"></i>
              <span>Saved</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/settings" className="flex items-center w-full">
              <i className="fa-solid fa-gear mr-2 text-gray-500"></i>
              <span>Settings</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600 focus:text-red-600">
            <button className="flex items-center w-full text-left">
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              <span>Logout</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default UserDropdown;
