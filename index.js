import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.render("index.ejs", {
  //     dayType: "A Weekday",
  //     Advice: "it's Time to work",
  //   });

  let today = new Date();
  const day = today.getDate();

  if (day === 0 && day === 6) {
    res.render("index.ejs", {
      dayType: "A Weekday",
      Advice: "it's Time to work",
    });
  }
  res.render("index.ejs", {
    dayType: "A Weekend",
    Advice: "it's Time to rest",
  });
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
