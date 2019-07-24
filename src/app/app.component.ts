import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	blogName: string = 'Mrd Blog';
	welcome: string = 'Bienvenue dans ' + this.blogName;
	copyright: string = '&copy; 2019 by <a href="mailto:mirado.raharison@gmail.com">Raharison Mirado</a>';
	
	dataPosts: Array<Posts> = [
		new Posts( 5, 'Mon 1er post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'post', 2, new Date() ),
		
		new Posts( 4, 'Mon 2ème post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'post', 0, new Date(Date.now() - (1 * 24*3600*1000)) ),
		
		new Posts( 3, 'Mon 3ème post', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'post', -1, new Date(Date.now() - (2 * 24*3600*1000)) ),
		
		new Posts( 2, 'Mon 4ème post', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.<br> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure..', 'post', -1, new Date(Date.now() - (3 * 24*3600*1000)) ),
		
		new Posts( 1, 'Mon 5ème post', 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.', 'post', 0, new Date(Date.now() - (5 * 24*3600*1000)) ),
		
		new Posts( 10, 'Mon er actu', 'On the other hand, we denounce with righteous indignation and dislike men who are..', 'news', 0, new Date(Date.now() - (1 * 24*3600*1000)) ),
		
		new Posts( 9, 'Mon 2ème actu', 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best..', 'news', 0, new Date(Date.now() - (2 * 24*3600*1000)) ),
		
		new Posts( 8, 'Mon 3ème actu', 'Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin..', 'news', 0, new Date(Date.now() - (5 * 24*3600*1000)) )
	];
	
	alreadyVoted:Array<boolean> = [];
	
	currectPage: string = 'post';
	
	public constructor(private titleService: Title ) {
		//Update meta title
		this.titleService.setTitle( this.blogName );
		
		//Init alreadyVoted
		for(let post of this.dataPosts){
			this.alreadyVoted[post.id] = false;
		}
		
		if(window.location.pathname == '/news'){
			this.currectPage = 'news';
		}
	}
	
	//Menu
	public onMenuClick(page){
		var lpage:string;
		var page_title:string;
		
		this.currectPage = page;
		lpage = (page == 'post' ? '' : page);
		page_title = (page == 'post' ? '' : ': Actualités');
		
		window.history.replaceState({}, '','/' + lpage);
		this.titleService.setTitle( this.blogName + page_title );
	}
}
