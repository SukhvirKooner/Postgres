// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres1_owner:Aij09yLSKCkZ@ep-raspy-surf-a5m49wte.us-east-2.aws.neon.tech/postgres1?sslmode=require"
})

async function createUsersTable() {
    await client.connect()

    // const result = await client.query(`
    //     CREATE TABLE users (
    //         id SERIAL PRIMARY KEY,
    //         username VARCHAR(50) UNIQUE NOT NULL,
    //         email VARCHAR(255) UNIQUE NOT NULL,
    //         password VARCHAR(255) NOT NULL,
    //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    //     );
    // `)
    const result = await client.query(`
        INSERT INTO users (username, email, password) VALUES ('sukh', 'sukhvir@example.com', 'sukhvir193');
        `)
    
    console.log(result) 
}

createUsersTable();