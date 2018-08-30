import { Component, Input} from 'angular2/core';
declare var $:any;
 
@Component({
    selector: 'ai-subStar',
    templateUrl: 'app/shared/subStar.component.html'
})
export class subStarComponent{
    @Input() price: number;
   
}
