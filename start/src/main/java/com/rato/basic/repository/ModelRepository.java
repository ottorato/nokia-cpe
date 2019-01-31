package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long>{

}
