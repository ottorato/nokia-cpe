package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.EndPoint;

@Repository
public interface EndPointRepository extends JpaRepository<EndPoint, Long>{

}
