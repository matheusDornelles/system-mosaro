import { Request, Response } from 'express';
import Marker from '../database/models/Marker';

class MarkerController {
  static async getAllMarkers(req: Request, res: Response): Promise<void> {
    try {
      const markers = await Marker.findAll();
      res.json(markers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async createMarker(req: Request, res: Response): Promise<void> {
    try {
      const { position } = req.body;

      // Remova o campo 'id' do objeto antes de criar o marcador
      const { ...markerData } = await Marker.create(position);

      res.status(201).json(markerData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default MarkerController;
