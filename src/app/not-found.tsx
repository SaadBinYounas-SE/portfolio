import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export default function NotFound() {
  return (
    <PageIntro title="Off the map" size="lg" lead="There’s no page at this address. It may have moved in the rebuild.">
      <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium">
        <Link href="/" className="link-rule">Go to the home page</Link>
        <Link href="/work" className="link-rule">Browse the work</Link>
      </p>
    </PageIntro>
  );
}
