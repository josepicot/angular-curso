import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  
  heroes: string[] = ['Spiderman','Ironman','HUlk','Thor','Captain America'];
  
  heroeBorrado: string = 'todavia nadie';

  borrarHeroe(): void {
  
    console.log('Borrando...');
    //this.heroes[this.heroes.length - 1] = ''; 

    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  
  }

}

