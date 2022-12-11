import { IApp, IIzmirPhotos } from '../types';

import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

const app_table = base(process.env.AIRTABLE_APP_TABLE_NAME);
const izmir_table = base(process.env.AIRTABLE_IZMIR_TABLE_NAME);

const getMinifiedRecords = (records: any) => {
	return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record: any) => {
	return {
		id: record.id,
		...record.fields
	};
};

async function getApps(): Promise<IApp[]> {
	const records = await app_table.select({}).all();
	const minifiedRecords: IApp[] = await getMinifiedRecords(records);
	return minifiedRecords;
}

async function getIzmirPhotos(): Promise<IIzmirPhotos[]> {
	const records = await izmir_table.select({}).all();
	const minifiedRecords: IIzmirPhotos[] = await getMinifiedRecords(records);
	return minifiedRecords;
}

export { getApps, getIzmirPhotos };
