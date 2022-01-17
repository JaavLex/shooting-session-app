import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string | null | undefined = null;

  constructor() { }

  apiUrlManager(managerRequest: 'get' | 'set', apiUrl?: string | null): void | string | null {
    switch(managerRequest) {
      case 'get':
        return this.API_URL
      case 'set':
        if (apiUrl)
          this.API_URL = apiUrl
        else
          throw new Error('ERROR: apiUrl is empty or null, you must specify it')
        break;
      default:
        throw new Error('ERROR: Type of request is unknown')
    }
  }

  async getApiData(): Promise<any> {
    return await fetch(`${this.API_URL}`)
      .then(data => {return data.json()})
  }

  debug(): void {
    console.log('+------------- CURRENT API SERVICE CONFIGURATION DEBUG ----------')
    console.log('| CURRENT API URL: ' + this.API_URL)
    console.log('| CURRENT FULL URL: ' + `${this.API_URL}`)
    console.log('+----------------------------------------------------------------')
  }
}