import { IApp } from '@/types';

const Airtable = require('airtable');

const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMinifiedRecords = (records) => {
	return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
	return {
		id: record.id,
		...record.fields
	};
};

export default async function getApps(): Promise<IApp[]> {
	const records = await table.select({}).all();
	const minifiedRecords: IApp[] = await getMinifiedRecords(records);
	return minifiedRecords;
}
