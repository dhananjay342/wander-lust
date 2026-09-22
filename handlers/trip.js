import { Router } from "express";
import { create, findOne, remove, update } from "../services/trip.js";
import { createTripvalidator, updatetripValidator } from "../validators/trip.js";
const router = Router();

router.post("/", createTripvalidator, async (req, res, next) => {
  try {
    const trip = await create({ ...req.body, user: req.user});
    res.status(201).json(trip );
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const trip = await index(req.user.id);
    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const trip = await findOne(req.params.id, req.user);
    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", updatetripValidator, async (req, res, next) => {
  try {
    const trip = await update(req.params.id, req.body, req.user);
    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const trip = await remove(req.params.id, req.user);
    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
});

export default router;
