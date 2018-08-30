import { Component,Input} from 'angular2/core';
declare var $:any;
 
@Component({
    selector: 'ai-planet',
    templateUrl: 'app/shared/planet.component.html',
})
export class PlanetComponent{
    @Input() name:string;
   
}
