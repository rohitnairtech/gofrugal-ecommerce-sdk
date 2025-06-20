import type { Item, SalesOrder, GoFrugalSDKOptions, Customer, Category, CategoryValue, CategoryDetail, EanItem, ItemStockByBatchPrice } from './types';

export class GoFrugalSDK {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: GoFrugalSDKOptions) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl;
  }

  private async request<T>(path: string, method = 'GET', body?: any): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      'X-Auth-Token': this.apiKey
    };

    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errText}`);
    }

    return res.json() as Promise<T>;
  }

  // 1) Items API
  async getItems(): Promise<Item[]> {
    return this.request<Item[]>('/items');
  }

  // 2) Sales Order API
  async createSalesOrder(order: SalesOrder): Promise<{ result: { status: string; id: number } }> {
    return this.request('/salesOrders', 'POST', { salesOrder: order });
  }

  async getSalesOrders(): Promise<SalesOrder[]> {
    return this.request('/salesOrders');
  }

  async getSalesOrderById(id: string): Promise<SalesOrder> {
    return this.request(`/salesOrder?id=${id}`);
  }

  // 3) Customers API
  async getCustomers(): Promise<Customer[]> {
    return this.request('/customers');
  }

  async getCustomerById(id: string): Promise<Customer> {
    return this.request(`/customers/${id}`);
  }

  // 4) Categories API
  async getCategories(): Promise<Category[]> {
    return this.request('/categories');
  }

  // 5) CategoryValues API
  async getCategoryValues(categoryId: string): Promise<CategoryValue[]> {
    return this.request(`/categoryValues?categoryId=${categoryId}`);
  }

  // 6) CategoryDetails API
  async getCategoryDetails(id: string): Promise<CategoryDetail> {
    return this.request(`/categoryDetails/${id}`);
  }

  // 7) Item Master API
  async getItemMaster(): Promise<Item[]> {
    return this.request('/itemMaster');
  }

  // 8) eanCode API
  async getItemByEan(eanCode: string): Promise<EanItem> {
    return this.request(`/eanCode/${eanCode}`);
  }

  // 9) itemStockByBatchPrice API
  async getItemStockByBatchPrice(itemId: string): Promise<ItemStockByBatchPrice[]> {
    return this.request(`/itemStockByBatchPrice?itemId=${itemId}`);
  }
}
