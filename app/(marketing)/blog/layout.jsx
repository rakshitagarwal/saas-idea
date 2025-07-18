import { BlogHeaderLayout } from "@/components/content/blog-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BlogLayout({
  children,
}) {
  return (
    <>
      <BlogHeaderLayout />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
