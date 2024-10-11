// table-crud.ts

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await sql`CREATE TABLE IF NOT EXISTS todonew2 (
      id SERIAL PRIMARY KEY,
      title VARCHAR(256) NOT NULL,
      completed BOOLEAN DEFAULT FALSE 
    )`;
    return NextResponse.json({ message: "Table checked/created.", res }, { status: 200 });
  } catch (error) {
    console.error("Table Creation Error:", error);
    return NextResponse.json({ error: "Failed to create table." }, { status: 500 });
  }
}
