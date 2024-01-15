// backend/src/database/models/Marker.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';

interface MarkerAttributes {
  lat: number;
  lng: number;
}

class Marker extends Model<MarkerAttributes> implements MarkerAttributes {
  public lat!: number;
  public lng!: number;
}

Marker.init(
  {
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'marker',
  }
);

export default Marker;