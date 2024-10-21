import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcidadesService {

  url = "http://localhost:3000/cidades"
  constructor(private http: HttpClient) { }



    }

