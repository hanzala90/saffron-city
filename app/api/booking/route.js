import { Client, ID, TablesDB } from "node-appwrite";

function getConfig() {
  return {
    endpoint: process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1",
    projectId: process.env.APPWRITE_PROJECT_ID || "69bb486c001afbe81340",
    databaseId: process.env.APPWRITE_DATABASE_ID || "69bb48c4000248eb5208",
    tableId: process.env.APPWRITE_TABLE_ID || "booking",
    apiKey: process.env.APPWRITE_API_KEY
  };
}

function validatePayload(payload) {
  const name = String(payload.name || "").trim();
  const number = String(payload.number || "").trim();
  const email = String(payload.email || "").trim();
  const interested = String(payload.interested || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !number || !email || !interested) {
    return {
      ok: false,
      error: "Please fill all required fields."
    };
  }

  return {
    ok: true,
    data: { name, number, email, interested, message }
  };
}

export async function POST(request) {
  const config = getConfig();

  if (!config.apiKey) {
    return Response.json(
      {
        message: "Server configuration missing: APPWRITE_API_KEY is required."
      },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return Response.json({ message: validation.error }, { status: 400 });
  }

  const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setKey(config.apiKey);

  const tablesDB = new TablesDB(client);

  try {
    const row = await tablesDB.createRow({
      databaseId: config.databaseId,
      tableId: config.tableId,
      rowId: ID.unique(),
      data: {
        name: validation.data.name,
        number: validation.data.number,
        Email: validation.data.email,
        Interested: validation.data.interested,
        Message: validation.data.message
      }
    });

    return Response.json(
      {
        message: "Lead submitted successfully.",
        rowId: row.$id
      },
      { status: 201 }
    );
  } catch (error) {
    const safeMessage =
      typeof error?.message === "string"
        ? error.message
        : "Unable to submit lead to Appwrite.";

    return Response.json({ message: safeMessage }, { status: 500 });
  }
}
