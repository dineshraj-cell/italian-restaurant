export interface Category {
  category: string;
  id: number;
}

export interface Menu {
  category_id: number;
  food: string;
  is_stock: number;
  is_reduced: number;
  reduced_rate: string;
  rate: string;
  description: string;
  filling: string;
  dimensions: string;
  ingredients: string;
}
