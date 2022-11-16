import Realm from 'realm';
import ChecklistSchema from './schemas/checklist';
import FarmerSchema from './schemas/farmer';

const getRealm = async () => {
  const realm = await Realm.open({
    path: 'bov.control.realm',
    schema: [FarmerSchema, ChecklistSchema],
  });

  const farmer = realm.objects('Farmer');
  const checklist = realm.objects('Checklist');

  return {farmer, checklist};
};

const writeRealm = (data, schemaName) =>
  new Promise(async (resolve, reject) => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create(schemaName, data);
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });

export const createFarmer = farmer => writeRealm(farmer, 'Farmer');
export const createChecklist = checklist => writeRealm(checklist, 'Checklist');

export default getRealm;
