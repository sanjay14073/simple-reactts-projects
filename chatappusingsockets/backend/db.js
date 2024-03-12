import pg from 'pg';

let config = {
    user: 'postgres', 
    database: 'chatapp',
    password: '',
    port: 5432, 
    idleTimeoutMillis: 30000, 
  };

let db=new pg.Pool(config)

db.connect().then(()=>{console.log("connected successfully")}).catch((e)=>{console.log(e)})

export {db};