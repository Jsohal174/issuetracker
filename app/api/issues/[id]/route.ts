import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, {params}:{params: Promise<{ id: string }>}) {

  const { id } = await params;
  const body = await request.json()
  const validation = issueSchema.safeParse(body)


  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {status: 400})
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) }
  })

  if (!issue) {
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 })
  }

  const editedIssue = await prisma.issue.update({
    where: {
      id: issue.id
    },
    data: {
      title: body.title,
      description: body.description
    }
  })

  return NextResponse.json(editedIssue)
}


export async function DELETE(request: NextRequest, {params}:{params: Promise<{ id: string }>}) {

  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) }
  })

  if (!issue) {
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 })
  }

  await prisma.issue.delete({
    where: {
      id: issue.id
    }
  })

  return NextResponse.json({})
}