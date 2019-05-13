import { EditoraListComponent } from './editora-list/editora-list.component';
import { Routes, RouterModule } from '@angular/router';

const EDITORAS_ROUTES: Routes = [
    {
        path: '',
        component: EditoraListComponent
    }
];
export const editorasRouting = RouterModule.forChild(EDITORAS_ROUTES);