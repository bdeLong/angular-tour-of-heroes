import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
 selector: 'hero-detail',
 template: `
    <div *ngIf="hero" class="details">
        <h2>{{hero.name}} : Details</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
 `,
 styles: [`
 .details{
     position: absolute;
     padding: 0 10px 25px 10px; 
     top: 350px;
     left: 500px;
     border: 2px dotted;
 }
 `]
 
})
export class HeroDetailComponent {
 @Input() hero: Hero;
}