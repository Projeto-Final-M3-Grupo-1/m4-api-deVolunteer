import News from "../../entities/news.entity";

export interface iCreateNewsData {
	title: string;
	description: string;
	site: string;
	img: string;
}

export interface iNewsResponse {
	id: string;
	title: string;
	description: string;
	site: string;
	img: string;
	deletedAt: Date;
	createdAt: Date;
	updatedAt: Date;
}

export interface iUpdateNewsData {
	title?: string;
	description?: string;
	site?: string;
	img?: string;
}
