package com.cursodejava.curso.dao;

import com.cursodejava.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    boolean verificarCredenciales(Usuario usuario);
}
