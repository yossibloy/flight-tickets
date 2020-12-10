import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(public http:HttpClient) {}

  

 getdb(url:string,q):Observable<any> {
  return this.http.get(url+q)
}
 getdbb(url:string,b):Observable<any> {
  return this.http.get(url,b)
}
 postdb(url:string,b):Observable<any> {
  return this.http.post(url,b)
}
 updatedb(url:string,id):Observable<any> {
  return this.http.put(url,id)
}
 delete(url:string):Observable<any> {
  return this.http.delete(url)
}

  // 1טיסות נבחרות
  conditions:any[] = []
  
  // טיסות נבחרות2
  conditions2:any[]=[]

  //הלוך טיסה נוכחית
  thisflighyt1:object

  //חזור טיסה נוכחית
  thisflighyt2:object

  // סך הנוסעים הכללי
  passengers: number = 0

  passengersyoung: number = 0
  passengersadult: number = 0

  // מערך באורך מספר נוסעים
  arr:number[] = []

  //מספר הזמנה
  OrderNumber

  // סכום כבודות
  sumprycebaggage:number = 0


  passengersarr = []

}
