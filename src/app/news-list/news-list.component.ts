import { Component, Input, OnInit } from '@angular/core';

import { Posts } from '../posts';

@Component({
  selector: 'app-news-list',
  templateUrl: '../post-list/post-list.component.html',
  styleUrls: ['../post-list/post-list.component.scss']
})
export class NewsListComponent implements OnInit {

	dataPostsL: Array<Posts> = [];
	dataPostsR: Array<Posts> = [];
	
	@Input() posts: Array<Posts>;
	@Input() alreadyVoted:Array<boolean>;
	
	constructor() {}
	
	ngOnInit() {
		//Init left posts, or news list data
		var i = 1;
		for(let post of this.posts){
			if( post.type == 'news' ){				
				if( i % 2 == 0 ){
					this.dataPostsR.push(post);
				}else{
					this.dataPostsL.push(post);
				}
				i++;
			}
		}
	}
	
	public onVoteClick(postId, vote){
		var i = 0;
		var add = (vote ? 1 : -1);
		for(let post of this.posts){
			if(post.id == postId){
				this.alreadyVoted[post.id] = true;
				this.posts[i].loveIts = (this.posts[i].loveIts + add);
			}
			i++;
		}
	}

}
