package com.huyduc.manage.service;

import com.huyduc.manage.service.dto.CourseDTO;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Service Interface for managing Course
 */
public interface CourseService {

    /**
     * Save a course.
     *
     * @param courseDTO the entity to save
     * @return the persisted entity
     */
    CourseDTO save(CourseDTO courseDTO);

    /**
     * Get all course by id years.
     *
     * @param id     the id year of course
     * @param filter the filter data by max class
     * @return the list of entities
     */
    List<CourseDTO> findAllByYearIdAndFilter(Long id, boolean filter);


    /**
     * Update the course.
     *
     * @param courseDTO the pagination information
     * @return the entity after updated
     */
    Optional<CourseDTO> updateCourse(CourseDTO courseDTO);


    /**
     * Get the "id" course.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<CourseDTO> findOne(Long id);


    /**
     * Delete the "id" course.
     *
     * @param ids the id of the entity
     * @return the count is total all id deleted
     */
    AtomicInteger delete(List<Long> ids);
}
