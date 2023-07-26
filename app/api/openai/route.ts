import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ! Here is import to name the function with the method we will use.
export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    // * This is the settings for use api openai.
    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            // content: `Create small blog post with html tags based on this title: ${title} `,
            content: `Create 3 line blog post with html tags based on this title: ${title} `,
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assitant"
            }. write with html tags.`,
          },
        ],
      });
    // console.log(aiResponse.data.choices[0].message);

    // ? we send a response to client side with the content generate from openai
    return NextResponse.json(
      { content: aiResponse.data.choices[0].message?.content },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    // ? This is a recommended way to send message from next server to the client about an error.
    return NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
