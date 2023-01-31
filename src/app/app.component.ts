import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private gridApi!: GridApi;
  private gridApi2!: GridApi;

  title = 'selectionApp';

  onGridReady(params: GridReadyEvent) {    
    this.gridApi = params.api;
  }

  onGridReady2(params: GridReadyEvent) {    
    this.gridApi2 = params.api;
  }

  onFilterTextBoxChanged(evt: any) {
    console.log(evt.target.value);
    this.gridApi.setQuickFilter(evt.target.value);   
  }

  onFilterTextBoxChanged2(evt: any) {
    console.log(evt.target.value);
    this.gridApi2.setQuickFilter(evt.target.value);   
  }

  defaultColDef = {
    resizable: true
  };

  columnDefs: any[] = [
    {
      headerName: '',
      width: 40,
      checkboxSelection: true,
      suppressMenu: true,
      pinned: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      suppressSorting: true
    },
    { field: 'bnyAcctNo', headerName: 'BNYM Account Number', width: 200 },
    { field: 'nochuFundNo', headerName: 'Nochu Account Number', width: 200 },
    { field: 'acctName', headerName: 'Account Name', width: 150 }
  ];

  rowData = [
    { bnyAcctNo: 'Toyota', nochuFundNo: 'Celica', acctName: 35000 },
    { bnyAcctNo: 'Ford', nochuFundNo: 'Mondeo', acctName: 32000 },
    { bnyAcctNo: 'Porsche', nochuFundNo: 'Boxster', acctName: 72000 },
    { bnyAcctNo: 'Toyota', nochuFundNo: 'Celica', acctName: 35000 },
    { bnyAcctNo: 'Ford', nochuFundNo: 'Mondeo', acctName: 32000 },
    { bnyAcctNo: 'Porsche', nochuFundNo: 'Boxster', acctName: 72000 },
    { bnyAcctNo: 'Toyota', nochuFundNo: 'Celica', acctName: 35000 },
    { bnyAcctNo: 'Ford', nochuFundNo: 'Mondeo', acctName: 32000 },
    { bnyAcctNo: 'Porsche', nochuFundNo: 'Boxster', acctName: 72000 },
  ];

  buttonClick() {
    console.log('Button Clicked!');
  }
}
