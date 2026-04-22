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
  currentImageIndex: number = 0;
  
  // Touch/drag properties
  isDragging: boolean = false;
  startX: number = 0;
  currentX: number = 0;
  dragOffset: number = 0;

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
    if (this.project && this.project.images) {
      this.currentImageIndex = this.project.images.indexOf(image);
    }
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

  // Popup navigation
  nextImage(): void {
    if (this.project && this.project.images && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
      this.popupImage = this.project.images[this.currentImageIndex];
    }
  }

  prevImage(): void {
    if (this.project && this.project.images && this.project.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
      this.popupImage = this.project.images[this.currentImageIndex];
    }
  }

  // Touch/drag events for mobile
  onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
    this.dragOffset = 0;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;
    
    this.currentX = event.touches[0].clientX;
    this.dragOffset = this.currentX - this.startX;
  }

  onTouchEnd(): void {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    
    // Threshold for triggering scroll (50px)
    if (Math.abs(this.dragOffset) > 50) {
      if (this.dragOffset > 0 && this.canScrollLeft) {
        // Swiped right, scroll left
        this.scrollLeft();
      } else if (this.dragOffset < 0 && this.canScrollRight) {
        // Swiped left, scroll right
        this.scrollRight();
      }
    }
    
    this.dragOffset = 0;
  }

  // Mouse drag events for desktop
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.dragOffset = 0;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    
    this.currentX = event.clientX;
    this.dragOffset = this.currentX - this.startX;
  }

  onMouseUp(): void {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    
    // Threshold for triggering scroll (50px)
    if (Math.abs(this.dragOffset) > 50) {
      if (this.dragOffset > 0 && this.canScrollLeft) {
        // Dragged right, scroll left
        this.scrollLeft();
      } else if (this.dragOffset < 0 && this.canScrollRight) {
        // Dragged left, scroll right
        this.scrollRight();
      }
    }
    
    this.dragOffset = 0;
  }

  onMouseLeave(): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.dragOffset = 0;
    }
  }

  getScrollTransform(): string {
    return `translateX(${this.scrollPosition + this.dragOffset}px)`;
  }
}
