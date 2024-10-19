// write a function to create a users table in your database.
import { Client } from 'pg'
 


// async function createUsersTable() {
//     await client.connect()
//}
    // const result = await client.query(`
    //     CREATE TABLE users (
    //         id SERIAL PRIMARY KEY,
    //         username VARCHAR(50) UNIQUE NOT NULL,
    //         email VARCHAR(255) UNIQUE NOT NULL,
    //         password VARCHAR(255) NOT NULL,
    //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    //     );
    // `)
    
    // const result = await client.query(`
    //     INSERT INTO users (username, email, password) VALUES ('sukh', 'sukhvir@example.com', 'sukhvir193');
    // `)
    
    // console.log(result) 

    async function insertData(username: string, email: string, password: string) {
        const client = new Client({
            connectionString: "postgresql://postgres1_owner:Aij09yLSKCkZ@ep-raspy-surf-a5m49wte.us-east-2.aws.neon.tech/postgres1?sslmode=require"
          })
      
        try {
          await client.connect(); // Ensure client connection is established
          // Use parameterized query to prevent SQL injection
          const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
          const values = [username, email, password];
          const res = await client.query(insertQuery, values);
          console.log('Insertion success:', res); // Output insertion result
        } catch (err) {
          console.error('Error during the insertion:', err);
        } finally {
          await client.end(); // Close the client connection
        }
      }

      insertData('username5', 'user5@example.com', 'user_password').catch(console.error);


