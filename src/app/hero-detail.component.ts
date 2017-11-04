import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
 selector: 'hero-detail',
 template: `
<div class="details">
    <div *ngIf="hero">
        <h2>{{hero.name}} : Details</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
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