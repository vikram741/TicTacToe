import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ttt';
  currentPlayer:string
  win :boolean
  winner:string;
  waiting="$$$###&&&";
  squares : string[];

  ngOnInit(){
      this.newgame();
    }
    makeMove(i:number)
    {
      if(this.squares[i]!=null)return;
        if(this.currentPlayer=="Xxx")
        {
          this.squares[i]='X';
          this.currentPlayer="Ooo";
        }
        else{
          this.squares[i]='O';
          this.currentPlayer="Xxx";
        }
        this.calWinner()
    }

    newgame(){
      this.currentPlayer="Xxx";
      this.win=false;
      this.winner=null;
      this.squares=Array(9).fill(null)
    }

    calWinner()
    {
              const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
              ];
              for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (
                  this.squares[a] &&
                  this.squares[a] === this.squares[b] &&
                  this.squares[a] === this.squares[c]
                ) {
                  this.win=true;
                  if(this.win&&this.winner==null)
                  {
                      if(this.currentPlayer=="Xxx")this.winner="Ooo";
                      else this.winner="Xxx";
                  }
                  setTimeout(()=>{ this.newgame();  },4000)
                }
              }

              for(let i=0;i<9;i++)
              {
                if(this.squares[i]==null)return;
              }
              setTimeout(()=>{ this.newgame();  },2000)

    }

}
  

