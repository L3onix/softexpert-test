drop table if exists products;
drop table if exists product_types_product_type_taxes;
drop table if exists product_types;
drop table if exists product_type_taxes;

create table if not exists product_type_taxes (
  id serial primary key,
  name text not null,
  percent_value float4 not null
);

create table if not exists product_types (
  id serial primary key,
  name text not null
);

create table if not exists product_types_product_type_taxes(
  id serial primary key,
  product_types_id int references product_types(id),
  product_type_taxes_id int references product_type_taxes(id)
);

create table if not exists products (
  id serial primary key,
  name text not null,
  price money not null,
  product_types_id int references product_types(id)
);

-- seeders
insert into product_type_taxes (name, percent_value) values ('ICMS', 15.00);
insert into product_type_taxes (name, percent_value) values ('Importação', 33.33);

insert into product_types (name) values ('Alimentos');
insert into product_types (name) values ('Eletrônicos');
insert into product_types (name) values ('Bebidas');

insert into product_types_product_type_taxes (product_types_id, product_type_taxes_id) values (1, 1);
insert into product_types_product_type_taxes (product_types_id, product_type_taxes_id) values (2, 1);
insert into product_types_product_type_taxes (product_types_id, product_type_taxes_id) values (2, 2);
insert into product_types_product_type_taxes (product_types_id, product_type_taxes_id) values (3, 1);

insert into products (name, price, product_types_id) values ('biscoito', 2.99, 1);
insert into products (name, price, product_types_id) values ('cerveja', 3.99, 3);
insert into products (name, price, product_types_id) values ('celular', 2000.00, 2);

