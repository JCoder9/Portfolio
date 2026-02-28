import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/models/project.model';
import { projectData } from '../data/project-data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  selectedImage: string = '';
  scrollPosition: number = 0;
  thumbnailWidth: number = 120; // thumbnail width + margin
  visibleThumbnails: number = 4;
  canScrollLeft: boolean = false;
  canScrollRight: boolean = false;
  showPopup: boolean = false;
  popupImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.project = projectData.find(p => p.slug === slug) || null;
      
      if (!this.project) {
        this.router.navigate(['/projects']);
      } else if (this.project.images && this.project.images.length > 0) {
        this.selectedImage = this.project.images[0];
        this.updateScrollButtons();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  isVideo(src: string): boolean {
    return src.toLowerCase().includes('.mp4') || src.toLowerCase().includes('.mov') || src.toLowerCase().includes('.webm');
  }

  scrollLeft(): void {
    if (this.scrollPosition < 0) {
      this.scrollPosition += this.thumbnailWidth;
      this.updateScrollButtons();
    }
  }

  scrollRight(): void {
    if (this.project && this.project.images) {
      const maxScroll = -(this.project.images.length - this.visibleThumbnails) * this.thumbnailWidth;
      if (this.scrollPosition > maxScroll) {
        this.scrollPosition -= this.thumbnailWidth;
        this.updateScrollButtons();
      }
    }
  }

  updateScrollButtons(): void {
    this.canScrollLeft = this.scrollPosition < 0;
    if (this.project && this.project.images) {
      const maxScroll = -(this.project.images.length - this.visibleThumbnails) * this.thumbnailWidth;
      this.canScrollRight = this.scrollPosition > maxScroll && this.project.images.length > this.visibleThumbnails;
    }
  }

  openPopup(image: string): void {
    this.popupImage = image;
    this.showPopup = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closePopup(): void {
    this.showPopup = false;
    this.popupImage = '';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  onPopupBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closePopup();
    }
  }
}
