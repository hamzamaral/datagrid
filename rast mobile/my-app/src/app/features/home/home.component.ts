import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../core/interface/Userdata';


let user =[{
      
  SosyalMedyaLinki : "instagram.com/mobilerast" ,
  SosyalMedyaAdi: "instagram",
  Aciklama: "We'll help you to finish your development project successfully."
},{
  
  SosyalMedyaLinki : "tr.linkedin.com/company/rastmobile" ,
  SosyalMedyaAdi: "linkedin",
  Aciklama: "Hire vetted developers from Rast Mobile to scale up your tech projects."
},{
  
  SosyalMedyaLinki : "behance.net/rastmobile" ,
  SosyalMedyaAdi: "behance",
  Aciklama: "Software Development Agency Rast Mobile Information Technology Ltd.."
},{
  
  SosyalMedyaLinki : "twitter.com/rastmobile" ,
  SosyalMedyaAdi: "twitter",
  Aciklama: "Software Development Agency Rast Mobile Information Technology Ltd.."
}];

let lokaluser: UserData[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
   valueinput = "";

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog );
    console.log(dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.dataSource.data = [...user]

    });
  }


  displayedColumns: string[] = [ 'SosyalMedyaLinki', 'SosyalMedyaAdi', 'Aciklama'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null | null = null;
  @ViewChild(MatSort) sort: MatSort | null | null = null;

  constructor(public dialog: MatDialog) {

    this.dataSource =  new MatTableDataSource(user);
    // let data :string[] | null = JSON.parse(localStorage.getItem('user_data')!) || []; 
    let userDataString: string | null = localStorage.getItem('user_data');
    let data: any[] = userDataString ? JSON.parse(userDataString) : {}
    data.forEach((item, index)=> {
      user.push(data[index])
      lokaluser.push(data[index])
    })
    
    console.log(user)

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("ngAfterViewInit")
  }

  applyFilter() {    

    const filterValue = this.valueinput
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)
    console.log(typeof this.dataSource.filter)
    console.log("this.dataSource.filter")
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  clearvalue(){
    this.valueinput = '';
    this.applyFilter()

   }
}


function createNewUser(Aciklama: string,link: string,ad: string): UserData {
  return {
        SosyalMedyaLinki: link,
        SosyalMedyaAdi: ad,
        Aciklama:Aciklama,
      };
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatIconModule,MatCardModule,FormsModule],
  styleUrl: './dialog-content-example-dialog.css',

})
export class DialogContentExampleDialog {
  Aciklama = "";
  Link = "";
  ad = "";
  kaydet(){
    console.log(this.Aciklama,this.Link,this.ad)
    let newValue = createNewUser(this.Aciklama,this.Link,this.ad);
    user.push(newValue)
     
    lokaluser.push(newValue)
    localStorage.setItem('user_data', JSON.stringify(lokaluser))
    this.Aciklama = "";
    this.Link = "";
    this.ad = "";


  }
}