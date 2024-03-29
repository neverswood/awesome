import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from '../shared/components/comments/comments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    HttpClientModule,
    MatCardModule,
    SharedModule,
  ],
  providers: [PostsService],
  exports: [PostListComponent, PostListItemComponent],
})
export class SocialMediaModule {}
