docker run --name db_name -e POSTGRES_PASSWORD=db_password -d -p 5432:5432 postgres:16.1 && 
sleep 1 && 
DATABASE_URL="db_url" bun prisma db seed
DATABASE_URL="db_url" bun prisma db push &&