import { useParams } from "react-router-dom"

export default function SingleProduct() {

    const {product, id} = useParams()
    console.log(product, id)

  return (
    <>
    <div>SingleProduct</div>

    <h1>{product}</h1>
    <h2>{id}</h2>
    </>
  )
}
