import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MyApiClient} from "./ouath";
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class HttpTokenClient {// add error handling
//how to check is user  is logged in????
  private tokenClient: MyApiClient;

  constructor(private httpClient: HttpClient) {
    this.tokenClient = new MyApiClient(httpClient);
  }


  public get(url:string) {
    let token = this.tokenClient.fetchToken();
    const headers = new HttpHeaders({'Authorization':'Bearer '+token['access_token']});
    return this.httpClient.get(url,{headers});
  }

  public getObservableType(url:string, type:any) {
    let token = this.tokenClient.fetchToken();
    const headers = new HttpHeaders({'Authorization':'Bearer '+token['access_token']});
    return this.httpClient.get<typeof type>(url,{headers});
  }

  public post(url:string, data:FormData) {
    let token = this.tokenClient.fetchToken();
    const headers = new HttpHeaders({'Authorization':'Bearer '+token['access_token']});
    return this.httpClient.post(url,data,{headers});
  }

  public postObservableType(url:string, data:FormData,observable:any) {
    let token = this.tokenClient.fetchToken();
    const headers = new HttpHeaders({'Authorization':'Bearer '+token['access_token']});
    return this.httpClient.post<typeof observable>(url,observable,{headers});
  }

  public login(grant_type?: string, data?: any) {
    return this.tokenClient.getToken(grant_type,data);
  }

  logout() {

  }

}
