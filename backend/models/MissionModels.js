import mongoose from "mongoose";

const missionSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    dateAndTime: { type: Date },
    description: { type: String },
    tasks: [
      {
        image: { type: String },
        task: { type: String },
        volunteerAssignForTask: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
          },
        ], // task assign for volunteer
      },
    ],
    status: { type: Number, enum: [0, 1, 2], default: 2 }, // 0-active 1-saved 2-pending
    eventManagerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }, // persopn who create this event
    assignManager: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }], // person who's was assign for  event
    ManagerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }, // person who create this login user
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Missions", missionSchema);
