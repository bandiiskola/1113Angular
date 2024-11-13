import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ReszletekComponent } from './reszletek/reszletek.component';

export const routes: Routes = [{ path: '', component: ListaComponent },
    { path: 'flight/:id', component: ReszletekComponent },];
