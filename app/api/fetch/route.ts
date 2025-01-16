import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export async function POST(req: NextRequest) {
	const { url } = await req.json();

	if (!url) {
		return NextResponse.json(
			{ error: "Database URL is required" },
			{ status: 400 }
		);
	}

	try {
		const client = new Client({ connectionString: url });
		await client.connect();

		// Fetch all table names
		const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `);

		const tables = tablesResult.rows.map((row) => row.table_name);

		// Fetch data from each table
		const data = [];
		for (const table of tables) {
			const tableData = await client.query(
				`SELECT * FROM "${table}" LIMIT 10;`
			); // Limit to 10 rows for brevity
			data.push({
				tableName: table,
				columns: tableData.fields.map((field) => field.name),
				rows: tableData.rows,
			});
		}

		await client.end();

		return NextResponse.json(
			{
				status: "success",
				message: "Data fetched successfully",
				data,
			},
			{ status: 200 }
		);
	} catch (error: any) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
