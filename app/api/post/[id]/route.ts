import { NextResponse } from "next/server";
import { prisma } from "../../client";

// ! We need to have the keyword route for the file to the api call works.

type Param = {
  params: { id: string };
};

// ! The api calls depend of the name of the method in this we make get call using PATCH METHOD is a new feature of nextjs 13
export async function PATCH(request: Request, { params }: Param) {
  try {
    const { id } = params;
    // * Grab data of the request from the front-end or client.
    const { title, content } = await request.json();
    // * We send send the data to the backend and we update the content data with the id post.
    const post = await prisma.post.update({
      where: { id: id },
      data: { content, title },
    });
    // ? Send response (post) to the client with nextjs .
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    // ? This is a recommended way to send message from next server to the client about an error.
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
