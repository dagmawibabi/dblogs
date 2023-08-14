import { ImageResponse, NextRequest } from "next/server";
import { reader } from "../lib/reader";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "";
  const configData = await reader.singletons.homepage.read();
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {title && (
          <div
            style={{
              fontSize: 100,
              fontWeight: 700,
              marginBottom: 100,
              color: "white",
            }}
          >
            {title}
          </div>
        )}

        <div
          style={{
            color: "white",
            marginBottom: 30,
            fontSize: 50,
            fontWeight: 700,
          }}
        >
          {configData?.metadatatitle}
        </div>
        <div style={{ color: "white", fontSize: 20 }}>
          {configData?.metadatadescription}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
