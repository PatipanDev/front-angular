export interface CategoryModel {
    status: string
    data: Categories[]
}
export interface OneCategoryModel{
  status: string
  data: Categories
}

export interface Categories {
  category_id: number
  category_name: string
  description: string
}
