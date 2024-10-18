import Button from "@/app/components/Button";
import CenteredContent from "@/app/components/CenteredContent";

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <>
    <CenteredContent
      text={`Review ${params.reviewId} of Product ${params.productId}`}
     />
    </>
  );
}
