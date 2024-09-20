import { NextResponse } from "next/server";
// import Alexa from "ask-sdk-core"
// import i18n from "i18next"

// import languages  from "@/i18n/languages";

export async function GET(): Promise<NextResponse> {
  return new NextResponse('{error: "error"}', { 
    status: 500,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
