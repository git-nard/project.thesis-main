import express from 'express'

const router = express.Router();

router.post('/itineraries/:user', createItinerary);

export default router;