export function IconCircle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="h-2.5 w-2.5">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </span>
  );
}
