create database IBFC;
use IBFC;

# TABELA DE USUÁRIOS

create table users(

	id 			int auto_increment,
    name 		varchar(50),
    password	varchar(20),
    type		enum('Manager', 'Common'),
    
    constraint pk_user primary key (id)

);

select * from users;

drop table users;

# INSERTS TESTES

insert into users(name, password, type) 
values 
	('Usuário1', '12345', 'Manager'), 
	('Usuário2', '12345', 'Common'), 
    ('Usuário3', '67890', 'Common'),
    ('Usuário4', '12345', 'Common'),
    ('Usuário5', '67890', 'Common');

# TABELA DE CONCURSOS

create table contest(

	id 			int auto_increment,
	position	varchar(50),
    customer 	varchar(50),
    salary		decimal(8,2),
    location	varchar(120),
    status 		enum('Open', 'Closed') default 'Open',
    
    constraint pk_contest primary key(id)
);

select * from contest;

drop table contest;

# INSERTS TESTES

INSERT INTO contest (position, customer, salary, location, status)
VALUES
  ('Analista de Sistemas', 'TJ-SP', 8108.80, 'São Paulo - SP', 'Open'),
  ('Policial Penal', 'SAP-SP', 4920.00, 'Campinas - SP', 'Closed'),
  ('Auditor de Controle', 'CGE-SP', 17850.00, 'São Paulo - SP', 'Open'),
  ('Técnico em Enfermagem', 'IAMSPE', 1996.53, 'Santo André - SP', 'Closed'),
  ('Analista Jurídico', 'MP-SP', 12700.00, 'São Paulo - SP', 'Open'),
  ('Agente de Fiscalização', 'ARTESP', 6800.00, 'Campinas - SP', 'Open'),
  ('Analista de Regulação', 'ARSESP', 9050.00, 'São Paulo - SP', 'Open'),
  ('Técnico Administrativo', 'Prefeitura de Indaiatuba', 3200.00, 'Indaiatuba - SP', 'Closed'),
  ('Guarda Civil Municipal', 'Prefeitura de Mairiporã', 3450.00, 'Mairiporã - SP', 'Open'),
  ('Desenhista Técnico', 'Prefeitura de Campinas', 4020.00, 'Campinas - SP', 'Closed'),
  ('Biologista', 'Hospital das Clínicas USP', 2648.17, 'Ribeirão Preto - SP', 'Open'),
  ('Enfermeiro Plantonista', 'HCFMB', 4150.00, 'Botucatu - SP', 'Open'),
  ('Fiscal de Rendas', 'SEFAZ-SP', 12800.00, 'São Paulo - SP', 'Open'),
  ('Assistente Técnico Administrativo', 'SES-SP', 2913.55, 'São José do Rio Preto - SP', 'Closed'),
  ('Oficial de Promotoria', 'MP-SP', 6200.00, 'Bauru - SP', 'Open');


# TABELA DE INSCRIÇÕES

create table inscription(

	id 				int auto_increment,
    id_user			int,
    id_contest 		int,
    
    constraint pk_inscription primary key(id),
    constraint fk_user foreign key(id_user) references users(id),
    constraint fk_constest foreign key(id_contest) references contest(id)

);

select * from inscription;

drop table inscription;

# INSERTS INSCRIÇÕES

insert into inscription (id_user, id_contest) values (2,4), (3,1), (4,3), (5,2);