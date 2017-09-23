import Dexie from 'dexie';

const db = new Dexie('myDb');
const initializeSchema = () => {
    let version = 1;
    
db.version(version).stores({
    users: '++id , username, password'
     
});

version += 1;

db.version(version).stores({
    tasks: '++id , taskname, taskdetails, time,Ischecked,forDate'
});


// Dexie.spawn(function*() {
//    db.users.put({ username: 'piyush', password: 123})
//    .then(() => {
//        return db.users.where('username').equals('piyush').first();
//    }).then((user) => {
//     console.log("Got id " + JSON.stringify(user));

//    });
//     // Now lets add a bunch of tasks
    
// }).catch(err => {
//     console.error("ohh! error" +err.stack);
// });
// Dexie.spawn(function*() {
//  db.tasks.put({ taskname: 'piyush', taskdetails: 'sssss'})
//    .then(() => {
//        return db.tasks.where('taskname').equals('piyush').first();
//    }).then((res) => {
//     console.log("Got tasks " + JSON.stringify(res));

//    });
//     // Now lets add a bunch of tasks
    
// }).catch(er => {
//     console.error("ohh! error" +er.stack);
// });

}
initializeSchema();

export default db;