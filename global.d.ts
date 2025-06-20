export interface GoFrugalSDKOptions {
  apiKey: string;
  baseUrl: string;
}

export interface Item {
  itemId: string;
  itemName: string;
  locationId?: string;
  stock?: {
    stock: number;
    salePrice: number;
    mrp: number;
    itemReferenceCode: string;
    taxPercentage: number;
  }[];
}

export interface SalesOrderItem {
  rowNo: number;
  itemId: string;
  quantity: number;
  rate: number;
  discountAmount?: number;
}

export interface SalesOrder {
  onlineReferenceNo: string;
  createdAt: string;
  status: string;
  customerName: string;
  customerEmail: string;
  customerMobile: string;
  orderItems: SalesOrderItem[];
}

export interface Customer {
  customerId: string;
  name: string;
  email?: string;
  mobile?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface CategoryValue {
  id: string;
  name: string;
  categoryId: string;
}

export interface CategoryDetail {
  id: string;
  description: string;
}

export interface EanItem {
  itemId: string;
  eanCode: string;
}

export interface ItemStockByBatchPrice {
  batchNo: string;
  price: number;
  stock: number;
}