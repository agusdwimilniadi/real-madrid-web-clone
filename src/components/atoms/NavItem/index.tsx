const NavItem = ({ link, name }: { link: string; name: string }) => {
  return (
    <a
      href={link}
      className="block font-semibold text-gray-600 hover:text-indigo-600 transition-all duration-700 ease-in-out"
    >
      {name}
    </a>
  );
};

export default NavItem;
