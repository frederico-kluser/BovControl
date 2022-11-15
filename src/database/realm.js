import Realm from 'realm';
import ChecklistSchema from './schemas/checklist';

const getRealm = async () => {
  const realm = await Realm.open({
    path: 'bov.control.realm',
    schema: [ChecklistSchema],
  });

  return realm;
};

export default getRealm;
