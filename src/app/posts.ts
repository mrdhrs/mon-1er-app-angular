export class Posts {
	constructor(
		public id: number,
		public title: string,
		public content: string,
		public type: string,	//post or news
		public loveIts: number,
		public created_at: Date
	) {}
}
