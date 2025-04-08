import { Injectable } from '@angular/core';

interface Category {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    { id:5, name: 'Cake', image: 'assets/categories/cake.png'}
  ];

  constructor() { }
}
