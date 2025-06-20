// SDK Configuration
export interface GoFrugalSDKOptions {
  apiKey: string;
  baseUrl: string;
}

// Item related interfaces
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

export interface EanItem {
  itemId: string;
  eanCode: string;
}

export interface ItemStockByBatchPrice {
  batchNo: string;
  price: number;
  stock: number;
}

// Sales Order related interfaces
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

// Customer related interfaces
export interface Customer {
  customerId: string;
  name: string;
  email?: string;
  mobile?: string;
}

// Category related interfaces
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

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

// Utility types
export type Status = 'pending' | 'success' | 'error';
export type Runtime = 'bun' | 'deno' | 'browser' | 'node';
