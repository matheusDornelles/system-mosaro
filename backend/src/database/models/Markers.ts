import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config';

export interface MarkerAttributes {
  id: number;
  position: { lat: number; lng: number };
  
}

class Marker extends Model<MarkerAttributes> implements MarkerAttributes {
  public id!: number;
  public position!: { lat: number; lng: number };

}

Marker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  
  },
  {
    sequelize,
    modelName: 'Marker',
  }
);

export default Marker;
