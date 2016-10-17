import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'    
})
export class AppComponent { 
    //[ ] means property binding - Component to DOM
    //( ) means event binding - DOM to Component
    title = 'Customer App';
    name = 'Perry';
    perrysColor = 'blue';

    changeSuitColor(){
        this.perrysColor = this.perrysColor=== 'blue' ? 'red':'blue';
    }

}
