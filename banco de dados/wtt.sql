create database db_wtt;

use db_wtt;

create table usuario(
	id int auto_increment primary key,
	nome varchar(255) not null,
    email varchar(255) unique not null,
    senha varchar(255) not null
);

CREATE TABLE dados_redes_sociais (
    usuario_id INT,
    tempo_uso_minutos int,
    rede_social enum('twitter', 'whattsapp', 'tiktok', 'youtube', 'instagram') not null,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);