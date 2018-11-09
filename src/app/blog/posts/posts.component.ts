import { Component, OnInit } from '@angular/core';
import { PostingService } from './posting.service';
import { Posting } from './posting';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Posting[];
  public isPostingView: boolean = false;

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.postingService.getPosts()
      .subscribe((data: Posting[]) => {
        this.posts = data.slice(10);
        this.isPostingView = false;
      },
        error => console.log(error));
  }

  getPost(posting: Posting) {
    this.postingService.getPostById(posting._id)
      .subscribe((data: Posting) => {
        this.posts = [];
        this.posts.push(data);
        this.isPostingView = true;
      },
        error => console.log(error));
  }

}
