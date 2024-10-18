export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <p className="text-3xl font-semibold animate-bounce text-cyan-500">
          This is Product {params.productId} Details
        </p>
      </div>
    </>
  );
}
