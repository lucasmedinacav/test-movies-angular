import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './blog/about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './blog/header/header.component';
import { PostingService } from './blog/posts/posting.service';
import { PostsComponent } from './blog/posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostsComponent,
    AboutMeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
