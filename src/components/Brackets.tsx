/**
 * Four corner brackets that "lock on" to whatever they frame. The same device
 * marks Saad in both photographs — at the desk and on the mountain.
 */
export default function Brackets({
  className = "",
  label,
  solid = false,
}: {
  className?: string;
  label?: string;
  /** Put the label on a dark chip — for use over a photograph. */
  solid?: boolean;
}) {
  const corner = "absolute h-4 w-4 border-current md:h-5 md:w-5";
  return (
    <div aria-hidden className={`pointer-events-none absolute animate-lock ${className}`}>
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
      {label && (
        <span className={`data absolute left-0 whitespace-nowrap ${solid ? "-top-8 bg-ink px-2 py-1 text-snow" : "-top-6"}`}>{label}</span>
      )}
    </div>
  );
}
