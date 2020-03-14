import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../models/clients";
import { Observable } from "rxjs";

const BASE_URL = "http://localhost:3000/api";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${BASE_URL}/clients`);
  }
  getClient(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${BASE_URL}/clients/${id}`);
  }
  updateClient(id: string, body: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${BASE_URL}/clients/${id}`, body);
  }
  deleteClient(id: string): Observable<Client> {
    return this.httpClient.delete<Client>(`${BASE_URL}/clients/${id}`);
  }
  createClient(body: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${BASE_URL}/clients`, body);
  }
}
