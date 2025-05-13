import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-article',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule,FormsModule ],
  templateUrl: './gestion-article.component.html',
  styleUrl: './gestion-article.component.css'
})
export class GestionArticleComponent implements OnInit{

  searchMot: string = '';
  filteredArticles: any[] = [];
  articles: any[] = []; 
  selectedBlog: any; 
  showUpdateForm: boolean = false; 
  form!: FormGroup; 
  submitted: boolean=false; 
  emp: any; 

  constructor(private fb: FormBuilder,private articleService: ArticleService) {} 
  
  ngOnInit(): void { 
    this.loadListArticles();  
    this.form = this.fb.group({ 
    departmentName: ['', Validators.required] 
  }); 
  } 


  loadListArticles(): void { 
  this.articleService.getListArticles().subscribe(
    data => {
      console.log(data); 
      this.articles = data; 
      this.filteredArticles = data; 
    },
    err => console.log(err)
  ); 
}

onSearch(): void {
  const mot = this.searchMot.toLowerCase().trim();
  if (!mot) {
    this.filteredArticles = this.articles; 
  } else {
    this.filteredArticles = this.articles.filter(article =>
      article.nomArt.toLowerCase().includes(mot)
    );
  }
}

 
  
  onSubmit(): void { 
  } 
}