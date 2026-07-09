/** Soft pastel gradient blobs drifting behind the whole page — Sewood's airy backdrop. */
export default function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-drift-a absolute -left-40 top-[-12%] h-[30rem] w-[30rem] rounded-full bg-mint-200/50 blur-[110px]" />
      <div className="animate-drift-b absolute right-[-8%] top-[2%] h-[26rem] w-[26rem] rounded-full bg-blush/60 blur-[110px]" />
      <div className="animate-drift-c absolute bottom-[8%] left-[6%] h-[24rem] w-[24rem] rounded-full bg-lavender/60 blur-[110px]" />
      <div className="animate-drift-a absolute bottom-[-14%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-sky/60 blur-[110px]" />
    </div>
  );
}
