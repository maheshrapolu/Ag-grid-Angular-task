import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('agGrid') agGrid: AgGridAngular;

public searchvalue;
public gridApi;
public gridColumnApi;
public columnApi;
  title = 'my-app';
 
  columnDefs = [
    { field: 'model' },
    { field: 'make' },
    { field: 'price' }
];
 
  // rowData: any;
 
  constructor(private http: HttpClient) {
 
  }
 
  ngOnInit() {
      // this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }
 
  onGridReady(params){
this.gridApi=params.api;
this.gridColumnApi=params.columnApi;
this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json').subscribe(data=>{
  params.api.setRowData(data)
})
  }
  quicksearch(){
    this.gridApi.setQuickFilter(this.searchvalue)
  }
  onBtnExport() {
    var params = {
    };
    this.gridApi.exportDataAsCsv(params);
  }
}