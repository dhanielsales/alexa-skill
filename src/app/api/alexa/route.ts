import { NextRequest, NextResponse } from "next/server";
// import Alexa from "ask-sdk-core"
// import i18n from "i18next"

// import languages  from "@/i18n/languages";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json({
    response: {
      outputSpeech: {
        type: "PlainText",
        text: "isso é só um teste, filho da puta"
      }
    }
  });
}
