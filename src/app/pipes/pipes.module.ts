import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ImageSanatizerPipe } from './image-sanatizer.pipe';


@NgModule({
  declarations: [FiltroPipe, ImageSanatizerPipe],
  exports: [ FiltroPipe, ImageSanatizerPipe ]
})
export class PipesModule { }
