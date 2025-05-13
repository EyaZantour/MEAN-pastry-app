import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {

  formArticle!: FormGroup;
  id!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe((article) => {
      this.formArticle = this.fb.group({
        nomArt: [article.nomArt],
        description: [article.description],
        image: [article.image],
        prix: [article.prix]
      });
    });
  }

  update(): void {
    Swal.fire({
      title: 'Update Article',
      text: 'Are you sure you want to save these changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.updateArticle(this.id, this.formArticle.value)
          .subscribe({
            next: () => {
              Swal.fire('Updated!', 'Article has been updated.', 'success')
                .then(() => this.router.navigate(['/liste']));
            },
            error: () => {
              Swal.fire('Error!', 'Failed to update article', 'error');
            }
          });
      }
    });
  }

}
