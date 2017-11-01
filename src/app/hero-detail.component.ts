import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
 selector: 'hero-detail',
 template: `
<div class="details">
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
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
     top: 220px;
     left: 500px;
 }
 `]
 
})
export class HeroDetailComponent {
 @Input() hero: Hero;
}