import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'child',
    template: `<div><h2>This is your child..</h2>
               <br>
               <input type = 'text' [value]= "childTitle">
               <br><br>
               This is Child TextBox <input type = 'text' #ChildTextBox (keyup) = "handleChildEvent(ChildTextBox.value)">
                </div>`,
    inputs: ['childTitle'],
    outputs: ['childEvent']
})

export class ChildComponent {
    public childTitle: string = "Blank Title";
    public childEvent = new EventEmitter();

    handleChildEvent(childTextBoxValue : any) {
        this.childEvent.emit(childTextBoxValue);
    }

}