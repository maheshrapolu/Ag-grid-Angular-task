import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private Http:HttpClient) { }

  Get_All(pageS,pgeE){
    return this.Http.get(`http://192.168.3.162:9090/getAll/${pageS}/${pgeE}`);
  }
  Add_Data(alldata){
    return this.Http.post('http://192.168.3.162:9090/save/',alldata); 
  }
  Data_Delete(alldata){
return this.Http.delete('http://192.168.3.162:9090/delete/'+ alldata)
  }
  Data_Update(alldata){
    return this.Http.put('http://192.168.3.162:9090/edit', alldata)
  }
}
