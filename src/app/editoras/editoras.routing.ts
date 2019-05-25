import { EditoraCrudComponent } from './editora-crud/editora-crud.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { EditoraListComponent } from './editora-list/editora-list.component';
import { Routes, RouterModule } from '@angular/router';

const EDITORAS_ROUTES: Routes = [
    {
        path: '',
        component: EditoraCrudComponent
    },
    {
        path: ':id', 
        component: EditoraCrudComponent
    }
];
export const editorasRouting = RouterModule.forChild(EDITORAS_ROUTES);