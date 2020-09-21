import { Component, EventEmitter } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
    selector: 'first',
    template: `<div><h2>Inside First Component..</h2>
    <h3>{{title}}</h3>
    </div>`
})
export class FirstComponent {

    public activatedRoute: ActivatedRoute;
    public title:string;

    constructor(activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.title = this.activatedRoute.snapshot.params['title'];
    }

}