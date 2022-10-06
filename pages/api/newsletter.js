import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        message: "Invalid email address !",
      });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://datvt:DaSYFW46xmyXgjND@cluster0.4ldkwfy.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();
    console.log('okeeeee---->',userEmail);
    res.status(201).json({ message: "Signed up!" });
  } else {
    console.log(22222);
  }
}

export default handler;
