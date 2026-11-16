/** The logo: a ridge line that ends in a climb — part mountain, part slash. */
export default function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" aria-hidden>
      <path d="M2.5 23.5 10.5 9.5l4.5 7L22.5 3" stroke="currentColor" strokeWidth="3.1" strokeLinecap="square" />
      <path d="M19 23.5h6.5" stroke="currentColor" strokeWidth="3.1" strokeLinecap="square" />
    </svg>
  );
}
