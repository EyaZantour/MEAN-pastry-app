import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-article',
  standalone: true,
  imports: [ReactiveFormsModule],  
  templateUrl: './ajout-article.component.html',
  styleUrl: './ajout-article.component.css'
})
export class AjoutArticleComponent implements OnInit {
  formArticle!: FormGroup;
  submitted: boolean = false;

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formArticle = this.fb.group({
      nomArt: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      prix: ['', [Validators.required, Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$")]]
    });
  }
  

  submit(): void {
    if (this.formArticle.invalid) {
      this.submitted = true;
      return;
    }

    this.articleService.postArticle(this.formArticle.value).subscribe({
      next: () => {
        this.route.navigate(['liste']);
        console.log(this.formArticle.value);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
