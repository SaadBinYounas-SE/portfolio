import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import WorkIndex from "@/components/WorkIndex";
import { projects } from "@/data/profile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Platforms, AI voice agents, data products and automation pipelines built and shipped by Saad Bin Younas.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        title="Work"
        lead={`${projects.length} systems I designed, built and shipped: platforms, AI voice agents, data products and the automation behind them.`}
      />
      <WorkIndex />
    </>
  );
}
