"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Loader2, Database } from "lucide-react";

export default function DatabaseViewer() {
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [tables, setTables] = useState<any[]>([]);
	const [activeTable, setActiveTable] = useState("");

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/fetch", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to fetch data");
			}

			setTables(data.data);
			setActiveTable(data.data[0]?.tableName || "");
			toast.success("Database data fetched successfully");
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className="w-full space-y-6 mb-10">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Database className="w-5 h-5 text-gray-600" />
					Enter Database URL
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex gap-4 items-center">
					<Input
						placeholder="Enter your database URL..."
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						className="flex-1 py-2 px-4 border rounded-md"
					/>
					<Button
						onClick={fetchData}
						disabled={loading || !url}
						className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Loading
							</>
						) : (
							"Fetch Data"
						)}
					</Button>
				</div>
			</CardContent>

			{/* Tabs and Tables */}
			{tables.length > 0 && (
				<CardContent>
					<Tabs value={activeTable} onValueChange={setActiveTable}>
						<TabsList className="mb-4 flex justify-start gap-2 ">
							{tables.map((table) => (
								<TabsTrigger
									key={table.tableName}
									value={table.tableName}
									className={`border px-4 py-2 rounded-md ${
										activeTable == table.tableName
											? " bg-blue-600 font-semibold text-red-800"
											: "bg-white text-gray-700"
									}`}
								>
									{table.tableName}
								</TabsTrigger>
							))}
						</TabsList>

						{tables.map((table) => (
							<TabsContent
								key={table.tableName}
								value={table.tableName}
							>
								<div className="rounded-md border overflow-x-auto">
									<Table>
										<TableHeader>
											<TableRow>
												{table.columns.map(
													(column: any) => (
														<TableHead key={column}>
															{column}
														</TableHead>
													)
												)}
											</TableRow>
										</TableHeader>
										<TableBody>
											{table.rows.map(
												(
													row: any,
													rowIndex: number
												) => (
													<TableRow key={rowIndex}>
														{table.columns.map(
															(column: any) => (
																<TableCell
																	key={column}
																>
																	{typeof row[
																		column
																	] ===
																	"object"
																		? JSON.stringify(
																				row[
																					column
																				]
																		  )
																		: String(
																				row[
																					column
																				]
																		  )}
																</TableCell>
															)
														)}
													</TableRow>
												)
											)}
										</TableBody>
									</Table>
								</div>
							</TabsContent>
						))}
					</Tabs>
				</CardContent>
			)}
		</Card>
	);
}
