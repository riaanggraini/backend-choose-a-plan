npm install
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm run dev