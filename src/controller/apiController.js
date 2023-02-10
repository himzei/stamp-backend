import { MainService } from "../service/MainService";

export const test = async (req, res) => {
  const course = await MainService.getAllCourse();
  return res.send({ ok: "true", course });
};
