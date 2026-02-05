export default function SidebarItem({
  label,
  active,
  disabled = false,
}: {
  label: string;
  active: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className={`flex w-full items-center rounded-xl font-mw px-4 py-2 text-lg transition
        ${
          active
            ? "bg-gradient-to-r from-purple-50 to-fuchsia-50 font-bold text-purple-700 shadow"
            : disabled
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-600 hover:bg-gray-100 hover:scale-105"
        }
      `}
    >
      {label}
    </button>
  );
}