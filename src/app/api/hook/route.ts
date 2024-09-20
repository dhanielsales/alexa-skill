import { NextResponse } from "next/server";
// import Alexa from "ask-sdk-core"
// import i18n from "i18next"

// import languages  from "@/i18n/languages";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    message: "Ok"
  });
}
