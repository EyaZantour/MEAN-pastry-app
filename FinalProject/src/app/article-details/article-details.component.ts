import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})

export class ArticleDetailsComponent implements OnInit {
  article: any;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.articleService.getArticleById(this.id).subscribe((data) => {
      console.log("Fetched article:", data); 
      this.article = data;
    });
  } 
   
  
  deleteArticle(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed && this.id) {
        this.articleService.deleteArticle(this.id).subscribe({
          next: () => {
            Swal.fire(
              'Deleted!',
              'Your article has been deleted.',
              'success'
            ).then(() => {
              this.router.navigate(['/liste']);
            });
          },
          error: () => {
            Swal.fire('Error!', 'Failed to delete article', 'error');
          }
        });
      }
    });
  }

  goToEdit(): void {
    Swal.fire({
      title: 'Edit Article',
      text: 'You are about to edit this article',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continue Editing',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed && this.id) {
        this.router.navigate(['/edit', this.id]);
      }
    });
  }
}
