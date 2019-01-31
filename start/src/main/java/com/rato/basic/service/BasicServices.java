package com.rato.basic.service;

import java.util.List;

/**
* Basic services.
*
* @author Ottoniel Domínguez González
* @version 1 2019
*/
public interface BasicServices<T> {
	/**
	 * 
	 * @param T entity
	 * @return
	 */
	T save(T t);
	T findById(Long id);
	List<T> findAll();
	void deleteById(Long id);
}
