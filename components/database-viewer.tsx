"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Loader2, Database } from "lucide-react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Import Tabs from react-tabs
import "react-tabs/style/react-tabs.css"; // Import styles for react-tabs

export default function DatabaseViewer() {
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);
	const [tables, setTables] = useState<any[]>([]);

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

			// Set the tables data dynamically
			setTables(data.data);

			toast.success("Database data fetched successfully");
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
			setRefetch(false);
		}
	};

	return (
		<div className="space-y-8">
			{/* Input Card */}
			{(tables.length === 0 || refetch) && (
				<Card className="shadow-md rounded-lg">
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
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
				</Card>
			)}

			{/* Display Current URL */}
			{tables.length > 0 && (
				<Card className="shadow-md rounded-lg">
					<CardHeader>
						<CardTitle className="text-sm text-gray-500">
							Current Database URL:{" "}
							<span className="text-gray-900">{url}</span>
						</CardTitle>
					</CardHeader>
				</Card>
			)}

			{/* Tabs for Dynamic Tables */}
			<Tabs>
				<TabList className="flex items-center justify-between space-x-4 border-b-2 border-gray-200">
					{/* Render tabs dynamically */}
					<div className="flex space-x-4">
						{tables.map((table, tableIndex) => (
							<Tab
								key={tableIndex}
								className="px-4 py-2 text-gray-600 hover:text-gray-900  cursor-pointer transition-all"
								selectedClassName="bg-gray-300 rounded-md"
							>
								{table.tableName}
							</Tab>
						))}
					</div>

					{/* Refetch Button */}
					{tables.length > 0 && (
						<Button
							onClick={() => setRefetch(true)}
							className="py-2 px-6 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all ml-auto"
						>
							Refetch
						</Button>
					)}
				</TabList>

				{/* Display Table Data in TabPanels */}
				{tables.map((table, tableIndex) => (
					<TabPanel key={tableIndex}>
						<Card className="shadow-md rounded-lg">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{table.tableName}
								</CardTitle>
							</CardHeader>
							<CardContent>
								{table.rows.length === 0 ? (
									<p className="text-muted-foreground text-sm">
										No data available
									</p>
								) : (
									<div className="overflow-x-auto">
										<Table className="min-w-full table-auto">
											<TableHeader>
												<TableRow>
													{table.columns.map(
														(column: any) => (
															<TableHead
																key={column}
																className="px-4 py-2 text-left text-sm text-gray-600"
															>
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
														<TableRow
															key={rowIndex}
															className="border-t border-gray-200"
														>
															{table.columns.map(
																(
																	column: any,
																	colIndex: number
																) => (
																	<TableCell
																		key={
																			colIndex
																		}
																		className="px-4 py-2 text-sm text-gray-800"
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
								)}
							</CardContent>
						</Card>
					</TabPanel>
				))}
			</Tabs>
		</div>
	);
}
