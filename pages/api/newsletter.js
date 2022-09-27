export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(1111);
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        message: "Invalid email address !",
      });
      return;
    }
    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  } else {
    console.log(22222);
  }
}
