import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

player1="player 1";
inputplayer1=0;
inputplayer2=0;
inputkoor1=0;
inputkoor2=0;
co=0;

titato_arr: string[][] = [
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"]
]

playtitato() {
    if (this.inputplayer1 >= 1 && this.inputplayer1 <= 5 && this.inputplayer2 >= 1 && this.inputplayer2 <= 5) {
      if (this.titato_arr[this.inputplayer1 - 1][this.inputplayer2 - 1] != "*") {
        alert("error");
      } 
      else {
        if (this.co % 2 == 0) {
          this.titato_arr[this.inputplayer1 - 1][this.inputplayer2 - 1] = "1";
          this.player1 = "p2";
        } 
        else {
          this.titato_arr[this.inputplayer1 - 1][this.inputplayer2 - 1] = "0";
          this.player1 = "p1";
        }
        this.co = this.co + 1;
      }
    } 
    else {
      alert("error");
    }

    if(
      this.titato_arr[0][0] == "1" && 
      this.titato_arr[0][1] == "1" &&
      this.titato_arr[0][3] == "1" && 
      this.titato_arr[0][4] == "1"
    )
    {alert("P1 menang");}

    else if(
      this.titato_arr[1][0] == "1" && 
      this.titato_arr[1][1] == "1" &&
      this.titato_arr[1][3] == "1" && 
      this.titato_arr[1][4] == "1"
    )
    {alert("P1 menang");}

    else if(
      this.titato_arr[2][0] == "1" && 
      this.titato_arr[2][1] == "1" &&
      this.titato_arr[2][3] == "1" && 
      this.titato_arr[2][4] == "1"
    )
    {alert("p1 menang");}

    else if(
      this.titato_arr[3][0] == "1" && 
      this.titato_arr[3][1] == "1" &&
      this.titato_arr[13][3] == "1" && 
      this.titato_arr[1][4] == "1"
    )
    {alert("p1 menang");}

    else if(
      this.titato_arr[1][0] == "1" && 
      this.titato_arr[1][1] == "1" &&
      this.titato_arr[1][3] == "1" && 
      this.titato_arr[1][4] == "1"
    )
    {alert("p1 menang");}

    else if(
      this.titato_arr[0][0] == "0" && 
      this.titato_arr[0][1] == "0" &&
      this.titato_arr[0][3] == "0" && 
      this.titato_arr[0][4] == "0"
    )
    {alert("p2 menang");}

    else if(
      this.titato_arr[1][0] == "0" && 
      this.titato_arr[1][1] == "0" &&
      this.titato_arr[1][3] == "0" && 
      this.titato_arr[1][4] == "0"
    )
    {alert("p2 menang");}

    else if(
      this.titato_arr[2][0] == "0" && 
      this.titato_arr[2][1] == "0" &&
      this.titato_arr[2][3] == "0" && 
      this.titato_arr[2][4] == "0"
    )
    {alert("p2 menang");}

    else if(
      this.titato_arr[3][0] == "0" && 
      this.titato_arr[3][1] == "0" &&
      this.titato_arr[3][3] == "0" && 
      this.titato_arr[3][4] == "0"
    )
    {alert("p2 menang");}

    else if(
      this.titato_arr[4][0] == "0" && 
      this.titato_arr[4][1] == "0" &&
      this.titato_arr[4][3] == "0" && 
      this.titato_arr[4][4] == "0"
    )
    {alert("p2 menang");}

  }
}
