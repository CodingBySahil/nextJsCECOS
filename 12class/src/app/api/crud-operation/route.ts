// crud-operation/route.ts

import { db, Todo } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// GET: Retrieve all todos
export async function GET() {
  try {
    const todos = await db.select().from(Todo);
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch todos." }, { status: 500 });
  }
}

// POST: Create a new todo
export async function POST(req: NextRequest) {
  try {
    const { title, completed } = await req.json();
    
    // Validate input
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const newTodo = await db
      .insert(Todo)
      .values({ title, completed: completed ?? false })  // Default to false if not provided
      .returning();

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Failed to create todo." }, { status: 500 });
  }
}

// PUT: Update an existing todo
export async function PUT(req: NextRequest) {
  try {
    const { id, title, completed } = await req.json();

    // Validate input
    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    const updatedTodo = await db
      .update(Todo)
      .set({ title, completed })
      .where(eq(Todo.id, id))
      .returning();

    if (updatedTodo.length === 0) {
      return NextResponse.json({ error: "Todo not found." }, { status: 404 });
    }

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: "Failed to update todo." }, { status: 500 });
  }
}

// DELETE: Remove a todo
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    // Validate input
    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    const deletedTodo = await db
      .delete(Todo)
      .where(eq(Todo.id, id))
      .returning();

    if (deletedTodo.length === 0) {
      return NextResponse.json({ error: "Todo not found." }, { status: 404 });
    }

    return NextResponse.json(deletedTodo, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ error: "Failed to delete todo." }, { status: 500 });
  }
}
