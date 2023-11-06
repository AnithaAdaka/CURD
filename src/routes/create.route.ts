import {Router} from 'express';

import * as create from "@/controllers/create.controller"

const router = Router();

router.post('/register', create.signUp);

router.post('/login', create.signIn);

router.post("/inserting",create.insert);


router.get("/getdetails",create.getall);

router.put("/editdet/:id",create.edit);

router.delete('/deletedet/:id', create.deletebyId);


export default router;