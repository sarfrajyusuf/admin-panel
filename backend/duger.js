import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./connectDB.js";
import fileupload from "express-fileupload";
import adminRouter from "./Routes/adminRoutes.js";
import missionRouter from "./Routes/missionRoutes.js";
import cmsRouter from "./Routes/cmsRoutes.js";
// import contactRouter from "./Routes/contactRoutes.js";

//
import { fileURLToPath } from "node:url";
import path from "node:path";
import planRouter from "./Routes/planRoutes.js";
import volunteerRouter from "./Routes/VolunterrRoute.js";
import organisationRouter from "./Routes/organisationRoutes.js";
import blogRoute from "./Routes/blogRoute.js";

//

//web routes
// const contactRoute = require("./Routes/webapi");
import contactRouter from "./Routes/webApi/contactRoutes.js";
import registerUser from "./Routes/webApi/registerUser.js";
import organization from "./Routes/webApi/organizationRoutes.js";
// import orgazationRouter from "./Routes/webApi/organizationRoutes.js";

//-----------------------
const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload()); // to accept form data

//_____________this is for build or file stuff_____________///
// app.use(express.static('public'));
// // app.use(express.static(__dirname));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//___________________Web Routes_______________________//

app.use("/api/user", registerUser);
app.use("/api/user", registerUser);
app.use("/api/contact", contactRouter);
app.use("/api/organization", organization);

//___________________Routes_______________________//
app.use("/api/users", adminRouter);
app.use("/api/mission", missionRouter);
app.use("/api/plan", planRouter);
app.use("/api/volunteer", volunteerRouter);
app.use("/api/cms", cmsRouter);
app.use("/api/organization", organisationRouter);
app.use("/api/blog", blogRoute);
//contact

app.use(
  "/node_modules_url",
  express.static(path.join(__dirname, "node_modules"))
);
app.use("/", express.static(path.join(__dirname, "web_build")));
app.use("/web/*", express.static(path.join(__dirname, "web_build")));
app.use("/admin", express.static(path.join(__dirname, "admin_build")));
app.use("/admin/*", express.static(path.join(__dirname, "admin_build")));

// app.use('/web', express.static(path.join(__dirname, 'web/build')));
// app.use('/web/*', express.static(path.join(__dirname, 'web/build')));

// app.use('/', express.static(path.join(__dirname, 'frontend/build')));
// app.use('/admin/*', express.static(path.join(__dirname, 'frontend/build')));
app.use(express.static(path.join(__dirname, "public")));

// if (process.env.NODE_ENV === "production") {
//   app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./frontend/build"));
//   });
// }

// app.use('/web', express.static(path.join(__dirname, "./web/build")));
// if (process.env.NODE_ENV === "production") {
//   app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "/web/build"));
//   });
// }

connectDB();

app.listen(process.env.PORT, () =>
  console.log(`server running on ${process.env.PORT}`.bold)
);
