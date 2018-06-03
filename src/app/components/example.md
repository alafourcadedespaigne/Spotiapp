## Ejemplo guardado api paises

- HTML

```angular
<ul>
  <li *ngFor="let pais of paises">
    {{ pais.name }} - {{ pais.population | number }}
  </li>
</ul>

```

- JAVASCRIPT

````js
  paises: any[] = [];
  
    constructor(private http: HttpClient) {
  
      this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((response: any) => {
  
          this.paises = response;
          console.log(this.paises.length);
          console.log(this.paises);
        });
  
    }
````


- Routes
````js
  import {Routes} from '@angular/router';
  import {HomeComponent} from './components/home/home.component';
  import {SearchComponent} from './components/search/search.component';
  
  export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
  ];

````

- Import Module
````javascript
  RouterModule.forRoot( ROUTES , { useHash: true }),
  HttpClientModule
````
