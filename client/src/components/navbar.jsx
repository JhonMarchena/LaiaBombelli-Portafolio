import Dropdown from "./dropdown";

function Navbar() {
  return (
    <nav className="flex items-center w-full justify-between py-5 px-4">
      <Dropdown />
    </nav>
  );
}

export default Navbar
