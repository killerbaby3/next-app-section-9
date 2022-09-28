export default function handler(req, res) {
  const eventId = req.body.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input",
      });
      return;
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({
      message: "Added new comment",
      comment: newComment,
    });
  }

  if (req.method === "GET") {
    const dumList = [
      {
        id: "c1",
        name: "Khiem Khiem",
        email: "khiemcho@gmail.com",
        text: "aaaaaaaaaaa",
      },
      {
        id: "c2",
        name: "Dat Dat",
        email: "datvt28@gmail.com",
        text: "dat comment ---- 2222",
      },
    ];
    res.status(200).json({
      comments: dumList,
    });
  }
}
