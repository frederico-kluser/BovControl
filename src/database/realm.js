import Realm from 'realm';
import ChecklistSchema from './schemas/checklist';
import FarmerSchema from './schemas/farmer';

const getRealm = () =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await Realm.open({
        path: 'bov.control.realm',
        schema: [FarmerSchema, ChecklistSchema],
      });

      const farmer = realm.objects('Farmer');
      const checklist = realm.objects('Checklist');

      resolve({farmer, checklist});
    } catch (error) {
      reject(error);
    }
  });

const writeRealm = (data, schemaName) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await Realm.open({
        path: 'bov.control.realm',
        schema: [FarmerSchema, ChecklistSchema],
      });

      realm.write(() => {
        realm.create(schemaName, data);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });

const updateRealm = (data, schemaName) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await Realm.open({
        path: 'bov.control.realm',
        schema: [FarmerSchema, ChecklistSchema],
      });

      realm.write(() => {
        const obj = realm.objectForPrimaryKey(schemaName, data._id);
        data.updated_at = new Date();
        Object.assign(obj, data);
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });

export const createFarmer = farmer => writeRealm(farmer, 'Farmer');
export const createChecklist = checklist => writeRealm(checklist, 'Checklist');
export const updateChecklist = checklist => updateRealm(checklist, 'Checklist');

export default getRealm;
