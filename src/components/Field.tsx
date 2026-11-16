"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import field from "@/assets/field.jpg";
import Brackets from "./Brackets";

/**
 * The mountain photograph, built into the page rather than placed on it:
 *  - its sky dissolves upward into the ice block above;
 *  - the headline sits behind the ridge (a second, masked copy of the photo
 *    lies over it) and sinks into the mist as the page scrolls;
 *  - the photo is greyscale except the red jacket, the same red as the
 *    contact block it stands on.
 */
export default function Field() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sink = useTransform(scrollYProgress, [0.12, 0.72], still ? ["0%", "0%"] : ["-22%", "46%"]);
  const scale = useTransform(scrollYProgress, [0, 0.85], still ? [1, 1] : [1.09, 1]);

  const photo = "absolute inset-0 h-full w-full object-cover";

  return (
    <section ref={ref} aria-labelledby="field-h" className="relative overflow-hidden bg-ice">
      <div className="relative h-[150vw] md:aspect-[2800/2373] md:h-auto">
        {/* stage — exactly the photo's proportions, so overlays use photo coordinates */}
        <motion.div style={{ scale }} className="absolute inset-y-0 left-[-22.6vw] w-[177vw] origin-top md:left-0 md:w-full">
          <Image
            src={field}
            alt="Saad from behind in a red top and a wide-brimmed hat, standing on a moraine and looking up at a glacier and a snow-covered mountain face under heavy cloud"
            sizes="(min-width: 768px) 100vw, 177vw"
            placeholder="blur"
            className={`${photo} [mask-image:linear-gradient(to_bottom,transparent_1%,black_19%)]`}
          />

          <motion.h2
            id="field-h"
            style={{ y: sink }}
            className="display absolute left-[15.8%] top-[9%] text-[19.5vw] text-ink md:left-[var(--gutter)] md:top-[7%] md:text-[15.4vw]"
          >
            Out of
            <br />
            office
          </motion.h2>

          {/* same photo again, only from the ridge down — this is what the headline slips behind */}
          <Image
            src={field}
            alt=""
            aria-hidden
            sizes="(min-width: 768px) 100vw, 177vw"
            className={`${photo} [mask-image:linear-gradient(172deg,transparent_35%,black_45%)]`}
          />

          <Brackets className="left-[34%] top-[53.5%] h-[31%] w-[16.5%] text-snow" label="Off the clock" solid />
        </motion.div>
      </div>

      <div className="bg-granite md:absolute md:bottom-0 md:right-0 px-[var(--gutter)] py-7 text-snow md:w-[min(31rem,40%)] md:px-9 md:py-9">
        <p className="text-[1.25rem] font-medium leading-[1.25] tracking-[-0.015em] md:text-[1.375rem]">
          When I’m not shipping, I’m somewhere with no signal and a lot of elevation.
        </p>
        <p className="mt-4 text-[0.9375rem] text-mist">
          The habits carry over: read the terrain before committing to a line, carry only what the route needs, and
          finish what you started.
        </p>
      </div>
    </section>
  );
}
