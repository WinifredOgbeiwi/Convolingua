import { COURSES } from '../data/courses.js'

/** @param {(key: string) => string} t */
export function getLocalizedCourses(t) {
  return COURSES.map((course) => ({
    ...course,
    title: t(`courses.items.${course.slug}.title`),
    description: t(`courses.items.${course.slug}.description`),
  }))
}
