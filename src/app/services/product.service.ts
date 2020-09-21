import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable()
export class ProductService {

    public baseurl : string = "http://localhost:8080/myapp";

    public httpClient :  HttpClient;
    constructor (httpClient : HttpClient)
    {
        this.httpClient = httpClient;
    }

    // addProduct(productObj : any){
    //     console.log('Product pushed into an array: ');
    // }

    addProduct(productObj : any): Observable<Object> {
        console.log('Product pushed into an array: ');
        return this.httpClient.post(this.baseurl+'/product', productObj);
      }

    getProducts () {
        return this.httpClient.get(this.baseurl + '/product');
    }

    updateProduct(id:number,value:any): Observable<Object> {
        console.log('!!!!!' + id);
        console.log(this.baseurl+'/product/'+id);
        return this.httpClient.put(this.baseurl+'/product/' + id,value);

    }

    deleteProduct(id:number): Observable<any> {
        console.log('$$$' + id);
        console.log(this.baseurl+'/product/'+id);
        return this.httpClient.delete(this.baseurl+'/product/' + id, {responseType:'text'});
        window.history.go(0);
    }
}