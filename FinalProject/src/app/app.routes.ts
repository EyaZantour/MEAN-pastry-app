import { RouterModule, Routes } from '@angular/router';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { NgModule } from '@angular/core';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

export const routes: Routes = [
    {path: 'liste', component:GestionArticleComponent},
    { path: '', component: GestionArticleComponent },
    { path: 'ajout', component: AjoutArticleComponent },
    { path: 'article/:id', component: ArticleDetailsComponent },
    { path: 'edit/:id', component: EditArticleComponent },
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
