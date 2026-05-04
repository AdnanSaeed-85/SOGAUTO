export default function BuyDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Buy Detail - {params.id}</h1>
    </div>
  )
}