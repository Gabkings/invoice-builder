import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Invoice } from "../models/invoice";
import { Observable } from "rxjs";

const BASE_URL = "http://localhost:3000/api";

@Injectable({
  providedIn: "root"
})
export class InvoiceService {
  constructor(private httpClient: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(`${BASE_URL}/invoices`);
  }
  createInvoice(body: Invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${BASE_URL}/invoices`, body);
  }
  deleteInvoice(id: string): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  getInvoice(id: string): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  updateInvoice(id: string, body: Invoice) {
    return this.httpClient.put<Invoice>(`${BASE_URL}/invoices/${id}`, body);
  }
}
