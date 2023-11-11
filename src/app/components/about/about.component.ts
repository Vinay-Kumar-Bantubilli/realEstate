import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private http:HttpClient){}

  data:any;
  ngOnInit(){
    this.http.get("https://api.rootnet.in/covid19-in/stats/latest/data").subscribe((data:any)=>{
      this.data = data.data.regional;
      // console.table(this.data)
    });



    // fetch("https://api.rootnet.in/covid19-in/stats/latest/data").then(data=>{
    //   console.log()
    //   data.json().then(row=>{
    //     console.log()
    //     this.data = row.data.regional
    //     console.table(this.data)
    //   })
    // })
  }
}
