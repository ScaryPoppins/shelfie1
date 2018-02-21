create table products (
    id serial unique primary key,
    name varchar(20),
    price money,
    description text,
    img text
)