/** Up-right arrow. Sized by the parent's font-size unless a className overrides it. */
export default function Arrow({ className = "h-[1em] w-[1em]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4.6 19.4 18 6M7 5.2h11.8V17" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}
