import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [CommonModule, SocialMediaRoutingModule, HttpClientModule],
  providers: [PostsService],
  exports: [PostListComponent, PostListItemComponent],
})
export class SocialMediaModule {}
