"use client";

import { useEffect, useState } from "react";

/** Saad's local time (Asia/Karachi), ticking once a minute. Renders nothing until mounted. */
export default function LocalTime({ withSeconds = false }: { withSeconds?: boolean }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: withSeconds ? "2-digit" : undefined,
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, withSeconds ? 1000 : 20_000);
    return () => clearInterval(id);
  }, [withSeconds]);

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {now ?? "--:--"} PKT
    </time>
  );
}
