import Switcher from './Switcher';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-primary shadow-md z-50 p-4 w-full">
      <div className="flex justify-center">
        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
