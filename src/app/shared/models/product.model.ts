export interface ProductsModel {
    status: string
    data: Products[]
}
export interface OneProductsModel{
  status: string
  data: Products
}

export interface Products {
  product_id: number
  product_name: string
  description: string
  unit_price: number      // ราคาต่อหน่วย
  quantity: number
  category_id: number
}
