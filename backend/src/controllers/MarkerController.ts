import { Request, Response } from 'express';
import Marker, {MarkerAttributes} from '../database/models/Markers';

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
      const { position, title } = req.body;

      // Remove o campo 'id' do objeto antes de criar o marcador
      const { id, ...markerData } = await Marker.create({ position } as MarkerAttributes);

      res.status(201).json(markerData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default MarkerController;
