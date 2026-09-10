"use client";

export default function DeleteButton({
  confirmMessage = "Are you sure? This can't be undone.",
}: {
  confirmMessage?: string;
}) {
  return (
    <button
      type="submit"
      onClick={(event) => {
        if (!window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
      className="text-sm font-bold text-rose-600 hover:underline"
    >
      Delete
    </button>
  );
}
