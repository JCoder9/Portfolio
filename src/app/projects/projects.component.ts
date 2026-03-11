import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { projectData } from '../data/project-data';
import { CATEGORIES } from '../data/category-data';
import { Project, Category } from '../shared/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects: Project[] = projectData;
  projects: Project[] = projectData;
  categories: Category[] = this.getCategoriesWithProjects();
  selectedCategory: Category = CATEGORIES[0]; // Default to "All Projects"
  isFiltersExpanded: boolean = false;

  getCategoriesWithProjects(): Category[] {
    return CATEGORIES.filter(category => {
      // Always include "All Projects"
      if (category.name === 'All Projects') {
        return true;
      }
      // Include category only if it has at least one project
      return this.allProjects.some(project => project.category?.name === category.name);
    });
  }

  filterByCategory(category: Category): void {
    this.selectedCategory = category;
    if (category.name === 'All Projects') {
      this.projects = this.allProjects;
    } else {
      this.projects = this.allProjects.filter(project => 
        project.category?.name === category.name
      );
    }
    // Close filters on mobile after selection
    this.isFiltersExpanded = false;
  }

  toggleFilters(): void {
    this.isFiltersExpanded = !this.isFiltersExpanded;
  }
}
