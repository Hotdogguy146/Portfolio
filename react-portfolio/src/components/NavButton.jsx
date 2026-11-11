function NavButton({ item, active, onSelect }) {
  return (
    <button
      className={"nav-item" + (active ? " active" : "")}
      onClick={() => onSelect(item.id)}
      aria-current={active ? "page" : undefined}
    >
      <span className="nav-dot" />
      {item.label}
    </button>
  );
}

export default NavButton;
