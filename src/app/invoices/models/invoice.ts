export class Invoice {
  _id: string;
  item: string;
  qty: number;
  rate: number;
  tax: number;
  date: Date;
  due: Date;
}

export class InvoicePagination {
  docs: Invoice[];
  page: number;
  pages: number;
  limit: number;
  total: number;
}
