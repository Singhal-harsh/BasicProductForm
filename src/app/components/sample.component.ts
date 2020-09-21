import { Component } from '@angular/core';

@Component({
    selector: 'sample',
    template: `<div><h2>Welcome to {{company}}</h2>
                <br><br>
                <img [src] = "showImage"/>
                <br><br>
                Account Details : {{Accountobj.name}}
                <br><br>
                <h3>Currency Details : {{money | currency :'USD'}}</h3>
                
                Using date pipe, Today's date : {{today | date: 'fullDate'}}
                <br><br>
                Using decimal pipe : {{number | number: '3.2-3'}}
                <br><br>
                Using percent pipe : {{number2 | percent}}
                <br><br>
                Using lowercase pipe : {{statement | lowercase}}
                <br><br>
                Using UPPERCASE pipe : {{statement | uppercase}}
                <br><br>
                Using slice pipe : {{statement | slice:3:6}}
                <br><br>
                
                <b>Username : </b><input type = "text" #myname [(ngModel)]="username"> {{username}}
                <br><br>
                <b>Password : </b><input type = "text" #mypwd [(ngModel)]="password"> {{password}}
                <br><br>
                <input type = "submit" value = "OK" (click) = "handleClickEvent(myname)">
                <br><br>
                <p *ngIf="showPara">This is Citibank Para, using ngIf!</p>
                <ol>
                    <li *ngFor="let city of cities">{{city}}</li>
                </ol>
                <div [ngSwitch]="citychosen">
                <p *ngSwitchCase = "'Pune'">City chosen is Pune! using ngSwitch</p>
                <p *ngSwitchCase = "'Delhi'">City chosen is Delhi! using ngSwitch</p>
                <p *ngSwitchCase = "'Agra'">City chosen is Agra! using ngSwitch</p>
                <p *ngSwitchCase = "'Mumbai'">City chosen is Mumbai! using ngSwitch</p>
                <p *ngSwitchDefault>Invalid City chosen!!</p>
                </div>
                <div class = "myClass">CSS Division</div>
                <div [ngClass] = "{myClass :applyCss}">CSS Division with ngClass!</div>
                <div [ngStyle] = "{'font-style':style , 'background-color':bgcolor, 'color':color }">CSS division with ngStyle!</div>
                </div>`,
    styles: ['.myClass {background-color: red;}']
})

export class SampleComponent{
    public company:string = "Citi!"
    public showImage:string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
    public username:string = '';
    public password:string = '';
    public showPara:boolean = true;
    public cities = ['Pune', 'Delhi', 'Agra', 'Mumbai'];
    public citychosen:string = 'Pune';
    public applyCss:boolean = false;
    public bgcolor:string = 'cyan';
    public style:string = 'italic';
    public color:string = 'red';

    public Accountobj = { id:120 , name : "Luthor", balance :87000};
    public money = 100.75;
    public number = 13.13;
    public number2 = 0.64;
    public today = Date();
    public statement:string = "Playing with cases";

    handleClickEvent(elementr:any)
    {
        console.log('OK Button Clicked: ', elementr.value);
    }
}