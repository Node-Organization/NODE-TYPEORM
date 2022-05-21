import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:     "mysql",
    host:     "localhost",
    port:     3306,
    username: "root",
    password: "",
    database: "nlw",
    entities: [
        "src/entities/*.ts"
    ],
    migrations: [
        "src/database/migration/*.ts"
    ]
});

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão feita");
    })
    .catch(err => {
        console.log('Error ao iniciar a conexão', err);
    })