import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { } 
  getListArticles(): Observable<any> { 
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/articles`) 
} 

postArticle(data: any): Observable<any> { 
  return this.httpClient.post<any> (`${environment.apiUrl}/${environment.prefix}/articles`,data); 
    } 

/*getArticleById(id: string): Observable<any> {
      return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/articles/${id}`);
} */
      getArticleById(id: string): Observable<any> {
        if (!id) {
          return throwError(() => new Error('ID is required'));
        }
        return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/articles/${id}`).pipe(
          catchError(error => {
            console.error('Error fetching article:', error);
            return throwError(() => error);
          })
        );
      }
    
  
deleteArticle(id: string): Observable<any> {
  return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/articles/${id}`);
}

updateArticle(id: string, data: any): Observable<any> {
  return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/articles/${id}`, data);
}


}
