import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public string1 = "LOWERCASE PIPE";
  public string2 = "uppercase pipe";
  public string3 = "this is titlecase";
  public string4 = "slicing the text";
  public class5 = {
    "firstname" : "harsh",
    "lastname" : "visaria"
  }
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
