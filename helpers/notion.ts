import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import readingTime from 'reading-time';
import { INote, INotes, ITag } from './../types/index';

const notion = new Client({
	auth: process.env.NOTION_TOKEN
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPublished = async (): Promise<INotes[]> => {
	const posts = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
		filter: {
			property: 'status',
			checkbox: {
				equals: true
			}
		},
		sorts: [
			{
				property: 'date',
				direction: 'descending'
			}
		]
	});

	const allPosts = posts.results;

	return allPosts.map((post) => {
		const result = getPageMetaData(post);
		return result;
	});
};

export const getPageMetaData = (post: any): INotes => {
	const getTags = (tags: any[]): ITag[] => {
		const allTags = tags.map((tag: { name: any }) => {
			return tag.name;
		});

		return allTags;
	};

	let cover = post.cover;
	switch (cover) {
		case 'file':
			cover = post.cover.file;
			break;
		case 'external':
			cover = post.cover.external.url;
			break;
		default:
			cover = '';
	}

	return {
		id: post.id,
		cover: cover,
		title: post.properties.name.title[0].plain_text,
		tags: getTags(post.properties.tags.multi_select),
		summary: post.properties.summary.rich_text[0].plain_text,
		date: getToday(post.last_edited_time),
		slug: post.properties.slug.rich_text[0].plain_text
	};
};

export const getToday = function (datestring: string | number | Date) {
	const date = new Date(datestring).toLocaleString('tr-TR', {
		month: 'short',
		day: '2-digit',
		year: 'numeric'
	});

	return date;
};

export const getSinglePost = async (slug: any): Promise<INote> => {
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
		filter: {
			property: 'slug',
			formula: {
				string: {
					equals: slug
				}
			}
		}
	});

	const page = response.results[0];
	const metadata = getPageMetaData(page);
	const mdblocks = await n2m.pageToMarkdown(page.id);
	const mdString = n2m.toMarkdownString(mdblocks);

	return {
		id: metadata.id,
		slug: metadata.slug,
		cover: metadata.cover,
		title: metadata.title,
		tags: metadata.tags,
		summary: metadata.summary,
		date: metadata.date,
		content: mdString,
		readingTime: readingTime(mdString).minutes
	};
};
